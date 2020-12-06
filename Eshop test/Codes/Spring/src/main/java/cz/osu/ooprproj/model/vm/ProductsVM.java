package cz.osu.ooprproj.model.vm;

import cz.osu.ooprproj.model.db.ProductsEntity;

public class ProductsVM {
    private int id;
    private String name;
    private Double price;
    private Double discountPrice;
    private String pictureUrl;
    private boolean isSelling;
    private int productTypeId;

    public static ProductsVM convertFromEntity(ProductsEntity entity, Double discountPrice) {
        ProductsVM ret = new ProductsVM();

        ret.setId(entity.getId());
        ret.setName(entity.getName());
        ret.setPrice(entity.getPrice());
        ret.setPictureUrl(entity.getPictureurl());
        ret.setDiscountPrice(discountPrice);
        ret.setSelling(entity.isIsselling());
        ret.setProductTypeId(entity.getProducttypeid());

        return ret;
    }

    public ProductsEntity convertToEntity() {
        ProductsEntity ret = new ProductsEntity();

        ret.setId(this.getId());
        ret.setName(this.getName());
        ret.setPrice(this.getPrice());
        ret.setPictureurl(this.getPictureUrl());
        ret.setIsselling(this.isSelling());
        ret.setProducttypeid(this.getProductTypeId());

        return ret;
    }

    public Double getDiscountPrice() {
        return discountPrice;
    }

    public void setDiscountPrice(Double discountPrice) {
        this.discountPrice = discountPrice;
    }

    public int getId() {
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

    public Double getPrice() {
        return price;
    }

    public void setPrice(Double price) {
        this.price = price;
    }

    public String getPictureUrl() {
        return pictureUrl;
    }

    public void setPictureUrl(String pictureUrl) {
        this.pictureUrl = pictureUrl;
    }

    public boolean isSelling() {
        return isSelling;
    }

    public void setSelling(boolean selling) {
        isSelling = selling;
    }

    public int getProductTypeId() {
        return productTypeId;
    }

    public void setProductTypeId(int productType) {
        this.productTypeId = productType;
    }
}
