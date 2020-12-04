package cz.osu.ooprproj.controllers;

import cz.osu.ooprproj.model.db.ProductTypeEntity;
import cz.osu.ooprproj.model.vm.ProductTypeVM;
import cz.osu.ooprproj.model.vm.ProductsVM;
import cz.osu.ooprproj.services.ProductTypesService;
import cz.osu.ooprproj.services.ProductsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.persistence.InheritanceType;
import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/productTypes")
public class ProductTypesController {
    private final ProductTypesService productTypesService;
    private final ProductsService productsService;

    public ProductTypesController(@Autowired ProductTypesService productTypesService,
                                  @Autowired ProductsService productsService) {
        this.productTypesService = productTypesService;
        this.productsService = productsService;
    }

    @CrossOrigin
    @RequestMapping(value = "/add", method = RequestMethod.POST)
    public ProductTypeVM create(@RequestBody ProductTypeVM productType) {
        ProductTypeEntity temp = this.productTypesService.create(productType.getTypeName());
        return ProductTypeVM.convertFromEntity(temp);
    }

    @CrossOrigin
    @RequestMapping(value = "/list", method = RequestMethod.GET)
    public List<ProductTypeVM> list() {
        return this.productTypesService.list()
                .stream()
                .map(pt -> ProductTypeVM.convertFromEntity(pt))
                .collect(Collectors.toList());
    }

    @CrossOrigin
    @RequestMapping(value = "/get", method = RequestMethod.GET)
    public ProductTypeVM getById(@RequestParam(name = "id") String idS) {
        int id = Integer.parseInt(idS);

        return ProductTypeVM.convertFromEntity(this.productTypesService.getById(id));
    }

    @CrossOrigin
    @RequestMapping(value = "/update", method = RequestMethod.PATCH)
    public void update(@RequestBody ProductTypeVM productType) {
        this.productTypesService.update(productType.convertToEntity());
    }

    @CrossOrigin
    @RequestMapping(value = "/getCount/selling", method=RequestMethod.GET)
    public int getCountSelling(@RequestParam(name = "id") String idS){
        int id = Integer.parseInt(idS);

        return this.productsService.list().stream()
                .filter(p -> p.isIsselling())
                .filter(p -> p.getProducttypeid() == id)
                .map(p -> ProductsVM.convertFromEntity(p, productsService.getDiscountPrice(p)))
                .collect(Collectors.toList()).size();
    }

    @CrossOrigin
    @RequestMapping(value="/getCount/notSelling", method = RequestMethod.GET)
    public int getCountNotSelling(@RequestParam(name="id") String idS){
        int id = Integer.parseInt(idS);

        return this.productsService.list().stream()
                .filter(p -> !p.isIsselling())
                .filter(p -> p.getProducttypeid() == id)
                .map(p -> ProductsVM.convertFromEntity(p, productsService.getDiscountPrice(p)))
                .collect(Collectors.toList()).size();
    }

    /*@CrossOrigin
    @RequestMapping(value = "/getByName", method = RequestMethod.GET)
    public ProductTypeVM getByName(@RequestParam(name="typeName") String typeName){
        Optional<ProductTypeEntity> temp = this.productTypesService.list()
                .stream()
                .filter(pt -> pt.getTypename().equals(typeName))
                .findFirst();

        if(temp.isPresent()){
            return ProductTypeVM.convertFromEntity(temp.get());
        }
        else return null;
        //správně výjimka
    }*/
}
