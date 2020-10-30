package cz.osu.ooprproj.model.db;

import javax.persistence.*;
import java.util.Objects;

@Entity
@Table(name = "PRODUCT_TYPE", schema = "SA", catalog = "")
public class ProductTypeEntity {
    private Integer id;
    private String typename;

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
    @Column(name = "TYPENAME", nullable = false, length = 256)
    public String getTypename() {
        return typename;
    }

    public void setTypename(String typename) {
        this.typename = typename;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        ProductTypeEntity that = (ProductTypeEntity) o;
        return Objects.equals(id, that.id) &&
                Objects.equals(typename, that.typename);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, typename);
    }
}
