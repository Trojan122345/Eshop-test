package cz.osu.ooprproj.model.vm;

import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import cz.osu.ooprproj.controllers.LocalDateDeserializer;
import cz.osu.ooprproj.controllers.LocalDateSerializer;
import cz.osu.ooprproj.model.db.DiscountsEntity;
import cz.osu.ooprproj.model.db.ProductsEntity;

import java.time.LocalDate;

public class DiscountsVM {
    private int id;
    private int productId;
    private int percent;

    @JsonSerialize(using = LocalDateSerializer.class)
    @JsonDeserialize(using = LocalDateDeserializer.class)
    private LocalDate datefrom;

    @JsonSerialize(using = LocalDateSerializer.class)
    @JsonDeserialize(using = LocalDateDeserializer.class)
    private LocalDate dateto;


    public static DiscountsVM convertFromEntity(DiscountsEntity entity) {
        DiscountsVM ret = new DiscountsVM();

        ret.setId(entity.getId());
        ret.setProductId(entity.getProductid());
        ret.setPercent(entity.getPercent());
        ret.setDatefrom(DateConverter.convertDateSQLToLocalDate(entity.getDatefrom()));
        ret.setDateto(DateConverter.convertDateSQLToLocalDate(entity.getDateto()));

        return ret;
    }

    public DiscountsEntity convertToEntity() {
        DiscountsEntity ret = new DiscountsEntity();

        ret.setId(this.getId());
        ret.setProductid(this.getProductId());
        ret.setPercent(this.getPercent());
        ret.setDatefrom(DateConverter.convertLocalDateToDateSQL(this.getDatefrom()));
        ret.setDateto(DateConverter.convertLocalDateToDateSQL(this.getDateto()));

        return ret;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getProductId() {
        return productId;
    }

    public void setProductId(int productId) {
        this.productId = productId;
    }

    public int getPercent() {
        return percent;
    }

    public void setPercent(int percent) {
        this.percent = percent;
    }

    public LocalDate getDatefrom() {
        return datefrom;
    }

    public void setDatefrom(LocalDate datefrom) {
        this.datefrom = datefrom;
    }

    public LocalDate getDateto() {
        return dateto;
    }

    public void setDateto(LocalDate dateto) {
        this.dateto = dateto;
    }
}
