package cz.osu.ooprproj.services;

import cz.osu.ooprproj.model.db.DiscountsEntity;
import cz.osu.ooprproj.model.db.ProductsEntity;
import cz.osu.ooprproj.model.repositories.DiscountsRepository;
import cz.osu.ooprproj.model.vm.DateConverter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class DiscountsService {
    private final DiscountsRepository discountsRepository;
    @Autowired
    ProductsService productsService;

    public DiscountsService(@Autowired DiscountsRepository discountsRepository) {
        this.discountsRepository = discountsRepository;
    }

    public DiscountsEntity create(int productId, int percent, LocalDate dateFrom, LocalDate dateTo) {
        DiscountsEntity ret = new DiscountsEntity();
        this.productsService.getById(productId);

        ret.setProductid(productId);
        ret.setPercent(percent);
        ret.setDateto(DateConverter.convertLocalDateToDateSQL(dateTo));
        ret.setDatefrom(DateConverter.convertLocalDateToDateSQL(dateFrom));

        discountsRepository.save(ret);

        return ret;
    }

    public DiscountsEntity getById(int discoutID) {
        Optional<DiscountsEntity> tmp = this.discountsRepository.findById(discoutID);
        if(tmp.isPresent())
            return tmp.get();
        else
            throw new RuntimeException("Discnout with ID " + discoutID + " could not be found.");
    }

    public List<DiscountsEntity> list() {
        return this.discountsRepository.findAll();
    }

    public void update(DiscountsEntity entity) {
        DiscountsEntity dbItem = this.discountsRepository.getOne(entity.getId());

        dbItem.setProductid(entity.getProductid());
        dbItem.setPercent(entity.getPercent());
        dbItem.setDateto(entity.getDateto());
        dbItem.setDatefrom(entity.getDatefrom());

        this.discountsRepository.save(dbItem);
    }

    public void delete(DiscountsEntity entity) {
        this.discountsRepository.delete(entity);
    }

    public List<DiscountsEntity> getDiscountsByProductId(int productId){
        List<DiscountsEntity> ret = this.discountsRepository.findAll().stream()
                .filter(de->de.getProductid()==productId)
                .collect(Collectors.toList());
        return ret;
    }
}
