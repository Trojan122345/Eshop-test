package cz.osu.ooprproj.controllers;

import cz.osu.ooprproj.model.db.ProductsEntity;
import cz.osu.ooprproj.model.vm.ProductsVM;
import cz.osu.ooprproj.services.ProductsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/products")
public class ProductsController {
    private final ProductsService productsService;

    public ProductsController(@Autowired ProductsService productsService) {
        this.productsService = productsService;
    }

    @CrossOrigin
    @RequestMapping(value = "/add", method = RequestMethod.POST)
    public ProductsVM create(
            @RequestBody ProductsVM product) {
        ProductsEntity temp = this.productsService.create(product.getName(), product.getPrice(), product.getPictureUrl());
        return ProductsVM.convertFromEntity(temp, temp.getPrice());
    }

    @CrossOrigin
    @RequestMapping(value = "/list", method = RequestMethod.GET)
    public List<ProductsVM> list() {
        return this.productsService.list()
                .stream()
                .map(p -> ProductsVM.convertFromEntity(p, productsService.getDiscountPrice(p)))
                .collect(Collectors.toList());
    }

    @CrossOrigin
    @RequestMapping(value = "/listSelling", method = RequestMethod.GET)
    public List<ProductsVM> listSelling() {
        return this.productsService.list().stream()
                .filter(p -> p.isIsselling())
                .map(p -> ProductsVM.convertFromEntity(p, productsService.getDiscountPrice(p)))
                .collect(Collectors.toList());
    }

    @CrossOrigin
    @RequestMapping(value = "/get", method = RequestMethod.GET)
    public ProductsVM getById(@RequestParam(name = "id") String idS) {
        int id = Integer.parseInt(idS);
        ProductsEntity productEntity = this.productsService.getById(id);
        double discPrice = productsService.getDiscountPrice(productEntity);

        ProductsVM productVM = ProductsVM.convertFromEntity(productEntity, discPrice);

        return productVM;
    }

    @CrossOrigin
    @RequestMapping(value = "/listNotSelling", method = RequestMethod.GET)
    public List<ProductsVM> listNotSelling() {
        return this.productsService.list().stream()
                .filter(p -> !p.isIsselling())
                .map(p -> ProductsVM.convertFromEntity(p, productsService.getDiscountPrice(p)))
                .collect(Collectors.toList());
    }

    @CrossOrigin
    @RequestMapping(value = "/deleteById", method = RequestMethod.DELETE)
    public void deleteById(@RequestParam(name = "id") String idS) {
        int id = Integer.parseInt(idS);
        this.productsService.deleteById(id);
    }

    @CrossOrigin
    @RequestMapping(value = "/delete", method = RequestMethod.DELETE)
    public void deleteByName(@RequestBody ProductsVM product) {
        this.productsService.delete(product.convertToEntity());
    }

    @CrossOrigin
    @RequestMapping(value = "/update", method = RequestMethod.PATCH)
    public void update(@RequestBody ProductsVM product) {
        this.productsService.update(product.convertToEntity());
    }

    @CrossOrigin
    @RequestMapping(value = "/putOutOfSale", method = RequestMethod.PATCH)
    public void putOurOfSale(@RequestParam(name = "productID") String productIdS) {
        int productID = Integer.parseInt(productIdS);

        ProductsVM item = ProductsVM.convertFromEntity(this.productsService.getById(productID), 0d);
        item.setSelling(false);
        this.productsService.update(item.convertToEntity());
    }

    @CrossOrigin
    @RequestMapping(value = "/putOnSale", method = RequestMethod.PATCH)
    public void putOnSale(@RequestParam(name = "productID") String productIdS) {
        int productID = Integer.parseInt(productIdS);

        ProductsVM item = ProductsVM.convertFromEntity(this.productsService.getById(productID), 0d);
        item.setSelling(true);
        this.productsService.update(item.convertToEntity());
    }
}
