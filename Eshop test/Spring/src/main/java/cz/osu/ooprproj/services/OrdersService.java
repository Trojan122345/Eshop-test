package cz.osu.ooprproj.services;

import cz.osu.ooprproj.model.db.CustomersEntity;
import cz.osu.ooprproj.model.db.OrdersEntity;
import cz.osu.ooprproj.model.db.OrdersProductsEntity;
import cz.osu.ooprproj.model.repositories.OrdersRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.sql.Date;
import java.util.Calendar;
import java.util.List;
import java.util.Optional;

@Service
public class OrdersService {
    private final OrdersRepository ordersRepository;
    @Autowired
    private CustomersService customersService;
    @Autowired
    OrdersProductsService ordersProductsService;

    public OrdersService(@Autowired OrdersRepository ordersRepository) {
        this.ordersRepository = ordersRepository;
    }

    public OrdersEntity create(int customerId){
        OrdersEntity ret = new OrdersEntity();
        CustomersEntity customer = customersService.getByID(customerId);

        ret.setCustomerid(customerId);
        ret.setIsfinished(false);

        this.ordersRepository.save(ret);

        return ret;
    }

    public OrdersEntity getById(int OrderId){
        Optional<OrdersEntity> tmp = this.ordersRepository.findById(OrderId);
        if(tmp.isPresent())
            return tmp.get();
        else
            throw new RuntimeException("Order with ID " + OrderId + " could not be found.");
    }

    public List<OrdersEntity> list(){
        return this.ordersRepository.findAll();
    }

    public OrdersEntity finishOrder(OrdersEntity entity){
        OrdersEntity dbItem = this.ordersRepository.getOne(entity.getId());

        dbItem.setCity(entity.getCity());
        dbItem.setStreet(entity.getStreet());
        dbItem.setPsc(entity.getPsc());
        dbItem.setOrderdate(new Date(Calendar.getInstance().getTime().getTime()));
        dbItem.setIsfinished(true);

        this.ordersRepository.save(dbItem);
        return dbItem;
    }

    public void update(OrdersEntity entity){
        OrdersEntity dbItem = this.ordersRepository.getOne(entity.getId());

        dbItem.setCustomerid(entity.getCustomerid());
        dbItem.setCity(entity.getCity());
        dbItem.setStreet(entity.getStreet());
        dbItem.setPsc(entity.getPsc());
        dbItem.setOrderdate(entity.getOrderdate());

        this.ordersRepository.save(dbItem);
    }

    public void delete(OrdersEntity entity){
        this.ordersRepository.delete(entity);
    }

    public List<OrdersProductsEntity> getAllItems(int orderId){
        return this.ordersProductsService.getOrdersProductsByOrder(orderId);
    }

    public double getTotalPrice(int orderID){
        double ret = ordersProductsService.getOrdersProductsByOrder(orderID).stream()
                .mapToDouble(op->op.getPricePerProduct()*op.getAmount())
                .sum();
        return ret;
    }
}
