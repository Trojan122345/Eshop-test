package cz.osu.ooprproj.model.db;

import javax.persistence.*;
import java.util.Objects;

@Entity
@Table(name = "PRODUCTS", schema = "SA", catalog = "")
public class ProductsEntity {
    private Integer id;
    private String name;
    private Double price;
    private String pictureurl;
    private boolean isselling;
    private Integer producttypeid;

    @Basic
    @Column(name = "ISSELLING", nullable = false)
    public Boolean getIsselling() {
        return isselling;
    }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ID", nullable = false)
    public Integer getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    @Basic
    @Column(name = "NAME", nullable = false, length = 256)
    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    @Basic
    @Column(name = "PRICE", nullable = false, precision = 0)
    public Double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public void setPrice(Double price) {
        this.price = price;
    }

    @Basic
    @Column(name = "PICTUREURL", nullable = true, length = 256)
    public String getPictureurl() {
        return pictureurl;
    }

    public void setPictureurl(String pictureurl) {
        this.pictureurl = pictureurl;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        ProductsEntity that = (ProductsEntity) o;
        return Objects.equals(id, that.id) &&
                Objects.equals(name, that.name) &&
                Objects.equals(price, that.price) &&
                Objects.equals(pictureurl, that.pictureurl);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, name, price, pictureurl);
    }

    @Basic
    @Column(name = "ISSELLING", nullable = false)
    public boolean isIsselling() {
        return isselling;
    }

    public void setIsselling(Boolean isselling) {
        this.isselling = isselling;
    }

    public void setIsselling(boolean isselling) {
        this.isselling = isselling;
    }

    @Basic
    @Column(name = "PRODUCTTYPEID", nullable = false)
    public Integer getProducttypeid() {
        return producttypeid;
    }

    public void setProducttypeid(Integer producttypeid) {
        this.producttypeid = producttypeid;
    }

    public void setProducttypeid(int producttypeid) {
        this.producttypeid = producttypeid;
    }
}
