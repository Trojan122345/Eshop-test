package cz.osu.ooprproj.model.vm;

import cz.osu.ooprproj.model.db.ProductTypeEntity;

public class ProductTypeVM {
    private int id;
    private String typeName;

    public static ProductTypeVM  convertFromEntity(ProductTypeEntity entity){
        ProductTypeVM ret = new ProductTypeVM();

        ret.setId(entity.getId());
        ret.setTypeName(entity.getTypename());

        return ret;
    }

    public ProductTypeEntity convertToEntity(){
        ProductTypeEntity ret = new ProductTypeEntity();

        ret.setId(id);
        ret.setTypename(typeName);

        return ret;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getTypeName() {
        return typeName;
    }

    public void setTypeName(String typeName) {
        this.typeName = typeName;
    }
}
