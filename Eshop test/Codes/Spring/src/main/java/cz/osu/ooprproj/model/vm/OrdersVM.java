package cz.osu.ooprproj.model.vm;

import cz.osu.ooprproj.model.db.OrdersEntity;

import java.time.LocalDate;

public class OrdersVM {
    private int id;
    private int customerId;
    private OrderAddrVM address;
    private boolean isFinished;
    private LocalDate orderdate;


    public static OrdersVM convertFromEntity(OrdersEntity entity) {
        OrdersVM ret = new OrdersVM();
        LocalDate orderDate = null;
        if(entity.getOrderdate()!=null)
            orderDate = DateConverter.convertDateSQLToLocalDate(entity.getOrderdate());

        OrderAddrVM tempAddress = new OrderAddrVM();
        tempAddress.setCity(entity.getCity());
        tempAddress.setPsc(entity.getPsc());
        tempAddress.setStreet(entity.getStreet());

        ret.setId(entity.getId());
        ret.setCustomerId(entity.getCustomerid());
        ret.setAddress(tempAddress);
        ret.setOrderdate(orderDate);
        ret.setFinished(entity.getIsfinished());

        return ret;
    }

    public OrdersEntity convertToEntity() {
        OrdersEntity ret = new OrdersEntity();

        ret.setId(this.getId());
        ret.setCustomerid(this.getCustomerId());
        ret.setCity(this.getAddress().getCity());
        ret.setStreet(this.getAddress().getStreet());
        ret.setPsc(this.getAddress().getPsc());
        ret.setIsfinished(this.isFinished);
        if(this.getOrderdate()!=null)
            ret.setOrderdate(DateConverter.convertLocalDateToDateSQL(this.getOrderdate()));

        return ret;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getCustomerId() {
        return customerId;
    }

    public void setCustomerId(int customerId) {
        this.customerId = customerId;
    }

    public LocalDate getOrderdate() {
        return orderdate;
    }

    public void setOrderdate(LocalDate orderdate) {
        this.orderdate = orderdate;
    }

    public OrderAddrVM getAddress() {
        return address;
    }

    public void setAddress(OrderAddrVM address) {
        this.address = address;
    }

    public boolean isFinished() {
        return isFinished;
    }

    public void setFinished(boolean finished) {
        isFinished = finished;
    }
}
