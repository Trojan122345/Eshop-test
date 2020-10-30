package cz.osu.ooprproj.services;

import cz.osu.ooprproj.model.db.ProductTypeEntity;
import cz.osu.ooprproj.model.repositories.ProductTypesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ProductTypesService {
    private final ProductTypesRepository productTypesRepository;

    public ProductTypesService(@Autowired ProductTypesRepository productTypesRepository) {
        this.productTypesRepository = productTypesRepository;
    }

    public ProductTypeEntity create(String typeName) {
        ProductTypeEntity ret = new ProductTypeEntity();

        ret.setTypename(typeName);

        productTypesRepository.save(ret);
        return ret;
    }

    public ProductTypeEntity getById(int productTypeId) {
        Optional<ProductTypeEntity> tmp = this.productTypesRepository.findById(productTypeId);
        if (tmp.isPresent())
            return tmp.get();
        else
            throw new RuntimeException("Product type with ID " + productTypeId + "could not be found");
    }

    public List<ProductTypeEntity> list() {
        return this.productTypesRepository.findAll();
    }

    public void update(ProductTypeEntity entity) {
        ProductTypeEntity dbItem = this.productTypesRepository.getOne(entity.getId());

        dbItem.setTypename(entity.getTypename());

        this.productTypesRepository.save(dbItem);
    }
}
