package cz.osu.ooprproj.services;

import cz.osu.ooprproj.model.db.OrdersEntity;
import cz.osu.ooprproj.model.db.ProductsEntity;
import cz.osu.ooprproj.model.repositories.OrdersProductsRepository;
import cz.osu.ooprproj.model.db.OrdersProductsEntity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;


@Service
public class OrdersProductsService {
    private final OrdersProductsRepository ordersProductsRepository;
    @Autowired
    private ProductsService productsService;
    @Autowired
    private OrdersService ordersService;

    public OrdersProductsService(@Autowired OrdersProductsRepository ordersProductsRepository) {
        this.ordersProductsRepository = ordersProductsRepository;
    }

    public OrdersProductsEntity create(int orderID, int productID, int ammount) {
        OrdersProductsEntity ret = new OrdersProductsEntity();
        double price = this.productsService.getDiscountPrice(productsService.getById(productID));
        this.ordersService.getById(orderID);

        ret.setOrderid(orderID);
        ret.setProductid(productID);
        ret.setAmount(ammount);
        ret.setPricePerProduct(price);

        this.ordersProductsRepository.save(ret);

        return ret;
    }

    public OrdersProductsEntity create(OrdersProductsEntity entity){
        return this.create(entity.getOrderid(), entity.getProductid(), entity.getAmount());
    }

    public OrdersProductsEntity getByID(int OrdersProductsID) {
        Optional<OrdersProductsEntity> tmp = this.ordersProductsRepository.findById(OrdersProductsID);

        if (tmp.isPresent())
            return tmp.get();
        else
            throw new RuntimeException("Order_Product with ID " + OrdersProductsID + " could not be found.");
    }

    public List<OrdersProductsEntity> list() {
        return this.ordersProductsRepository.findAll();
    }

    public List<OrdersEntity> getOrdersByProduct(int productID) {
        List<OrdersEntity> ret = ordersService.list().stream()
                .filter(o -> this.list().stream()
                        .filter(op -> op.getProductid() == productID)
                        .mapToInt(op -> op.getOrderid())
                        .anyMatch(opInt -> o.getId() == opInt))
                .collect(Collectors.toList());

        return ret;
    }

    public List<ProductsEntity> getProductsByOrder(int orderID) {
        List<ProductsEntity> ret = productsService.list().stream()
                .filter(p -> this.list().stream()
                        .filter(op -> op.getOrderid() == orderID)
                        .mapToInt(op -> op.getProductid())
                        .anyMatch(opInt -> p.getId() == opInt))
                .collect(Collectors.toList());
        return ret;
    }

    public List<OrdersProductsEntity> getOrdersProductsByOrder(int orderId){
        List<OrdersProductsEntity> ret = this.list().stream().filter(op->op.getOrderid()==orderId).collect(Collectors.toList());
        return ret;
    }

    public void update(OrdersProductsEntity entity) {
        OrdersProductsEntity dbItem = this.ordersProductsRepository.getOne(entity.getId());

        dbItem.setPricePerProduct(entity.getPricePerProduct());
        dbItem.setAmount(entity.getAmount());

        this.ordersProductsRepository.save(dbItem);
    }

    public void delete(OrdersProductsEntity entity) {
        this.ordersProductsRepository.delete(this.ordersProductsRepository.getOne(entity.getId()));
    }
}
