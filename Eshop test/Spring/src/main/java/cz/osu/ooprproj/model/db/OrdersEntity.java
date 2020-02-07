package cz.osu.ooprproj.model.db;

import javax.persistence.*;
import java.sql.Date;
import java.util.Objects;

@Entity
@Table(name = "ORDERS", schema = "SA", catalog = "")
public class OrdersEntity {
    private Integer id;
    private Integer customerid;
    private String city;
    private String street;
    private String psc;
    private Date orderdate;
    private Boolean isfinished;

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
    @Column(name = "CUSTOMERID", nullable = false)
    public Integer getCustomerid() {
        return customerid;
    }

    public void setCustomerid(Integer customerid) {
        this.customerid = customerid;
    }

    @Basic
    @Column(name = "CITY", nullable = true, length = 256)
    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    @Basic
    @Column(name = "STREET", nullable = true, length = 256)
    public String getStreet() {
        return street;
    }

    public void setStreet(String street) {
        this.street = street;
    }

    @Basic
    @Column(name = "PSC", nullable = true, length = 256)
    public String getPsc() {
        return psc;
    }

    public void setPsc(String psc) {
        this.psc = psc;
    }

    @Basic
    @Column(name = "ORDERDATE", nullable = true)
    public Date getOrderdate() {
        return orderdate;
    }

    public void setOrderdate(Date orderdate) {
        this.orderdate = orderdate;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        OrdersEntity that = (OrdersEntity) o;
        return Objects.equals(id, that.id) &&
                Objects.equals(customerid, that.customerid) &&
                Objects.equals(city, that.city) &&
                Objects.equals(street, that.street) &&
                Objects.equals(psc, that.psc) &&
                Objects.equals(orderdate, that.orderdate);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, customerid, city, street, psc, orderdate);
    }

    @Basic
    @Column(name = "ISFINISHED", nullable = false)
    public Boolean getIsfinished() {
        return isfinished;
    }

    public void setIsfinished(Boolean isfinished) {
        this.isfinished = isfinished;
    }
}
