package cz.osu.ooprproj.model.vm;

import cz.osu.ooprproj.model.db.CustomersEntity;

public class CustomersVM {
    private int id;
    private String name;
    private String surname;
    private String email;
    private String username;
    private String passwordHash;
    private boolean isAdmin;
    private String token;

    public static CustomersVM convertFromEntity(CustomersEntity entity) {
        CustomersVM ret = new CustomersVM();

        ret.setId(entity.getId());
        ret.setName(entity.getName());
        ret.setSurname(entity.getSurname());
        ret.setEmail(entity.getEmail());
        ret.setUsername(entity.getUsername());
        ret.setPasswordHash(entity.getPasswordhash());
        ret.setAdmin(entity.getIsadmin());
        ret.setToken(entity.getToken());


        return ret;
    }

    public CustomersEntity convertToEntity() {
        CustomersEntity ret = new CustomersEntity();

        ret.setId(this.getId());
        ret.setEmail(this.getEmail());
        ret.setName(this.getName());
        ret.setSurname(this.getSurname());
        ret.setUsername(this.getUsername());
        ret.setPasswordhash(this.getPasswordHash());
        ret.setIsadmin(this.isAdmin());

        return ret;
    }

    public Integer getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getSurname() {
        return surname;
    }

    public void setSurname(String surname) {
        this.surname = surname;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPasswordHash() {
        return passwordHash;
    }

    public void setPasswordHash(String passwordHash) {
        this.passwordHash = passwordHash;
    }

    public boolean isAdmin() {
        return isAdmin;
    }

    public void setAdmin(boolean admin) {
        isAdmin = admin;
    }

    public String getToken() {
        return token;
    }

    public void setToken(String token) {
        this.token = token;
    }
}
