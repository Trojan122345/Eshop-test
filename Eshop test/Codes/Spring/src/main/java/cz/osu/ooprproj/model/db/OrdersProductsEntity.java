package cz.osu.ooprproj.model.db;

import javax.persistence.*;
import java.util.Objects;

@Entity
@Table(name = "ORDERS_PRODUCTS", schema = "SA", catalog = "")
public class OrdersProductsEntity {
    private Integer id;
    private Integer orderid;
    private Integer productid;
    private Integer amount;
    private Double PricePerProduct;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ID", nullable = false)
    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    @Basic
    @Column(name = "ORDERID", nullable = false)
    public Integer getOrderid() {
        return orderid;
    }

    public void setOrderid(Integer orderid) {
        this.orderid = orderid;
    }

    @Basic
    @Column(name = "PRODUCTID", nullable = false)
    public Integer getProductid() {
        return productid;
    }

    public void setProductid(Integer productid) {
        this.productid = productid;
    }

    @Basic
    @Column(name = "AMOUNT", nullable = false)
    public Integer getAmount() {
        return amount;
    }

    public void setAmount(Integer amount) {
        this.amount = amount;
    }

    @Basic
    @Column(name = "PRICEPERPRODUCT", nullable = false, precision = 0)
    public Double getPricePerProduct() {
        return PricePerProduct;
    }

    public void setPricePerProduct(Double priceperproduct) {
        this.PricePerProduct = priceperproduct;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        OrdersProductsEntity that = (OrdersProductsEntity) o;
        return Objects.equals(id, that.id) &&
                Objects.equals(orderid, that.orderid) &&
                Objects.equals(productid, that.productid) &&
                Objects.equals(amount, that.amount) &&
                Objects.equals(PricePerProduct, that.PricePerProduct);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, orderid, productid, amount, PricePerProduct);
    }
}
