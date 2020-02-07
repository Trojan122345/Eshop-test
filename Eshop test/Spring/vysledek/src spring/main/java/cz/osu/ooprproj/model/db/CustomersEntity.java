package cz.osu.ooprproj.model.db;

import javax.persistence.*;
import java.util.Objects;

@Entity
@Table(name = "CUSTOMERS", schema = "SA", catalog = "")
public class CustomersEntity {
    private Integer id;
    private String name;
    private String surname;
    private String email;
    private String username;
    private String passwordhash;
    private Boolean isadmin;
    private String token;

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
    @Column(name = "NAME", nullable = false, length = 256)
    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    @Basic
    @Column(name = "SURNAME", nullable = false, length = 256)
    public String getSurname() {
        return surname;
    }

    public void setSurname(String surname) {
        this.surname = surname;
    }

    @Basic
    @Column(name = "EMAIL", nullable = false, length = 256)
    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    @Basic
    @Column(name = "USERNAME", nullable = true, length = 256)
    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    @Basic
    @Column(name = "PASSWORDHASH", nullable = true, length = 256)
    public String getPasswordhash() {
        return passwordhash;
    }

    public void setPasswordhash(String passwordhash) {
        this.passwordhash = passwordhash;
    }

    @Basic
    @Column(name = "ISADMIN", nullable = true)
    public Boolean getIsadmin() {
        return isadmin;
    }

    public void setIsadmin(Boolean isadmin) {
        this.isadmin = isadmin;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        CustomersEntity that = (CustomersEntity) o;
        return Objects.equals(id, that.id) &&
                Objects.equals(name, that.name) &&
                Objects.equals(surname, that.surname) &&
                Objects.equals(email, that.email) &&
                Objects.equals(username, that.username) &&
                Objects.equals(passwordhash, that.passwordhash) &&
                Objects.equals(isadmin, that.isadmin);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, name, surname, email, username, passwordhash, isadmin);
    }

    @Basic
    @Column(name = "TOKEN", nullable = true, length = 256)
    public String getToken() {
        return token;
    }

    public void setToken(String token) {
        this.token = token;
    }
}
