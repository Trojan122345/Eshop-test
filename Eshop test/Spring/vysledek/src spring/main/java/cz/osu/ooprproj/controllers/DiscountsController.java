package cz.osu.ooprproj.controllers;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import cz.osu.ooprproj.model.vm.DiscountsVM;
import cz.osu.ooprproj.services.DiscountsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping(value = "/api/discounts")
public class DiscountsController {
    private final DiscountsService discountsService;

    public DiscountsController(@Autowired DiscountsService discountsService) {
        this.discountsService = discountsService;
    }

    @CrossOrigin
    @RequestMapping(value = "/create", method = RequestMethod.POST)
    public DiscountsVM create(@RequestParam(name = "discountString") String discS) {
        ObjectMapper mapper = new ObjectMapper();
        DiscountsVM disc;
        try {
            disc = mapper.readValue(discS, DiscountsVM.class);
            return DiscountsVM.convertFromEntity(this.discountsService.create(disc.getProductId(), disc.getPercent(), disc.getDatefrom(), disc.getDateto()));
        } catch (JsonProcessingException e){
            throw new IllegalArgumentException();
        }

    }

    @CrossOrigin
    @RequestMapping(value = "/update", method = RequestMethod.PATCH)
    public void test(@RequestParam(name = "discountString") String discS) {
        ObjectMapper mapper = new ObjectMapper();
        DiscountsVM disc;
        try {
            disc = mapper.readValue(discS, DiscountsVM.class);
            this.discountsService.update(disc.convertToEntity());
        } catch (JsonProcessingException e){
            throw new IllegalArgumentException();
        }
    }

    @CrossOrigin
    @RequestMapping(value = "/list", method = RequestMethod.GET)
    public List<DiscountsVM> list(){
        return this.discountsService.list().stream()
                .map(d -> DiscountsVM.convertFromEntity(d))
                .collect(Collectors.toList());
    }

    @CrossOrigin
    @RequestMapping(value = "/delete", method = RequestMethod.DELETE)
    public void delete(@RequestParam(name = "discountID") String discountIdS){
        int discountID = Integer.parseInt(discountIdS);
        this.discountsService.delete(this.discountsService.getById(discountID));
    }
}

