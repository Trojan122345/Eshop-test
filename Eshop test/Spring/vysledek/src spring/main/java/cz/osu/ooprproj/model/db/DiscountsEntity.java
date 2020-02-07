package cz.osu.ooprproj.model.db;

import javax.persistence.*;
import java.sql.Date;
import java.util.Objects;

@Entity
@Table(name = "DISCOUNTS", schema = "SA", catalog = "")
public class DiscountsEntity {
    private Integer id;
    private Integer productid;
    private Integer percent;
    private Date datefrom;
    private Date dateto;

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
    @Column(name = "PRODUCTID", nullable = false)
    public Integer getProductid() {
        return productid;
    }

    public void setProductid(Integer productid) {
        this.productid = productid;
    }

    @Basic
    @Column(name = "PERCENT", nullable = false)
    public Integer getPercent() {
        return percent;
    }

    public void setPercent(Integer percent) {
        this.percent = percent;
    }

    @Basic
    @Column(name = "DATEFROM", nullable = false)
    public Date getDatefrom() {
        return datefrom;
    }

    public void setDatefrom(Date datefrom) {
        this.datefrom = datefrom;
    }

    @Basic
    @Column(name = "DATETO", nullable = false)
    public Date getDateto() {
        return dateto;
    }

    public void setDateto(Date dateto) {
        this.dateto = dateto;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        DiscountsEntity that = (DiscountsEntity) o;
        return Objects.equals(id, that.id) &&
                Objects.equals(productid, that.productid) &&
                Objects.equals(percent, that.percent) &&
                Objects.equals(datefrom, that.datefrom) &&
                Objects.equals(dateto, that.dateto);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, productid, percent, datefrom, dateto);
    }
}
