package cz.osu.ooprproj.model.vm;

import cz.osu.ooprproj.model.db.OrdersProductsEntity;

public class OrdersProductsVM {
    private int id;
    private int orderID;
    private int productID;
    private int amount;
    private Double pricePerProduct;

    public static OrdersProductsVM convertFromEntity(OrdersProductsEntity entity) {
        OrdersProductsVM ret = new OrdersProductsVM();

        ret.setId(entity.getId());
        ret.setOrderID(entity.getOrderid());
        ret.setProductID(entity.getProductid());
        ret.setAmount(entity.getAmount());
        ret.setPricePerProduct(entity.getPricePerProduct());

        return ret;
    }

    public OrdersProductsEntity convertToEntity() {
        OrdersProductsEntity ret = new OrdersProductsEntity();

        ret.setId(this.getId());
        ret.setOrderid(this.getOrderID());
        ret.setProductid(this.getProductID());
        ret.setAmount(this.getAmount());
        ret.setPricePerProduct(this.getPricePerProduct());

        return ret;
    }

    public int getId() {

        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getAmount() {
        return amount;
    }

    public void setAmount(int amount) {
        this.amount = amount;
    }

    public Double getPricePerProduct() {
        return pricePerProduct;
    }

    public void setPricePerProduct(Double pricePerProduct) {
        this.pricePerProduct = pricePerProduct;
    }

    public int getOrderID() {
        return orderID;
    }

    public void setOrderID(int orderID) {
        this.orderID = orderID;
    }

    public int getProductID() {
        return productID;
    }

    public void setProductID(int productID) {
        this.productID = productID;
    }
}
