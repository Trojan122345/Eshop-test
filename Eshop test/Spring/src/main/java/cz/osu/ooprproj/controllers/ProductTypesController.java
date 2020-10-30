package cz.osu.ooprproj.controllers;

import cz.osu.ooprproj.model.db.ProductTypeEntity;
import cz.osu.ooprproj.model.vm.ProductTypeVM;
import cz.osu.ooprproj.services.ProductTypesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/productTypes")
public class ProductTypesController {
    private final ProductTypesService productTypesService;

    public ProductTypesController(@Autowired ProductTypesService productTypesService) {
        this.productTypesService = productTypesService;
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
        System.out.println("xxx LIST xxx");
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
