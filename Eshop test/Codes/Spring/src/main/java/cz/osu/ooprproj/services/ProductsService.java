package cz.osu.ooprproj.services;

import cz.osu.ooprproj.model.db.DiscountsEntity;
import cz.osu.ooprproj.model.db.ProductsEntity;
import cz.osu.ooprproj.model.repositories.ProductsRepository;
import cz.osu.ooprproj.model.vm.DiscountsVM;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.Comparator;
import java.util.List;
import java.util.Optional;

@Service
public class ProductsService {
    private final ProductsRepository productsRepository;

    @Autowired
    private DiscountsService discountsService;

    public ProductsService(@Autowired ProductsRepository productsRepository) {
        this.productsRepository = productsRepository;
    }

    public ProductsEntity create(String name, double price, String pictureUrl, int productTypeId){
        ProductsEntity ret = new ProductsEntity();

        ret.setName(name);
        ret.setPrice(price);
        ret.setPictureurl(pictureUrl);
        ret.setIsselling(true);
        ret.setProducttypeid(productTypeId);

        this.productsRepository.save(ret);

        return ret;
    }

    public ProductsEntity getById(int productID){
        Optional<ProductsEntity> tmp = this.productsRepository.findById(productID);

        if(tmp.isPresent())
            return tmp.get();
        else
            throw new RuntimeException("Product with ID " + productID + " could not be found.");
    }

    public List<ProductsEntity> list(){
        return this.productsRepository.findAll();
    }

    public void update(ProductsEntity entity){
        ProductsEntity dbItem = this.productsRepository.getOne(entity.getId());

        dbItem.setName(entity.getName());
        dbItem.setPrice(entity.getPrice());
        dbItem.setPictureurl(entity.getPictureurl());
        dbItem.setIsselling(entity.isIsselling());
        dbItem.setProducttypeid(entity.getProducttypeid());

        this.productsRepository.save(dbItem);
    }

    public void delete(ProductsEntity entity){
        this.productsRepository.delete(entity);
    }

    public void deleteById(int id){
        ProductsEntity entity = this.getById(id);
        this.productsRepository.delete(entity);
    }

    public double getDiscountPrice(ProductsEntity entity){
        Optional<DiscountsEntity> discount = discountsService.getDiscountsByProductId(entity.getId()).stream()
                .map(d-> DiscountsVM.convertFromEntity(d))
                .filter(d->d.getDatefrom().compareTo(LocalDate.now())<=0)
                .filter(d->d.getDateto().compareTo(LocalDate.now())>=0)
                .map(d->d.convertToEntity())
                .max(Comparator.comparing(d->d.getPercent()));


        if(!discount.isPresent())
            return entity.getPrice();
        else
            return entity.getPrice() - (entity.getPrice()*((double)(discount.get().getPercent())/100));

    }

}
