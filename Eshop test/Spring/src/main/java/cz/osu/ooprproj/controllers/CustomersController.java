package cz.osu.ooprproj.controllers;

import cz.osu.ooprproj.model.vm.CustomersVM;
import cz.osu.ooprproj.services.AuthService;
import cz.osu.ooprproj.services.CustomersService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping(value = "/api/customers")
public class CustomersController {
    private final CustomersService customersService;
    private final AuthService authService;

    public CustomersController(@Autowired CustomersService customersService,
                               @Autowired AuthService authService
    ) {
        this.customersService = customersService;
        this.authService = authService;
    }

    @CrossOrigin
    @RequestMapping(value = "/create", method = RequestMethod.POST)
    public CustomersVM create(
            @RequestBody CustomersVM customersVM,
            @RequestParam(name = "rawPass") String password) {
        return CustomersVM.convertFromEntity(this.customersService.create(customersVM, password));
    }

    @CrossOrigin
    @RequestMapping(value = "/changepw", method = RequestMethod.POST)
    public void changepw(@RequestParam(name = "id") String idS, @RequestParam(name = "password") String rawPassword) {
        CustomersVM customer = getById(idS);
        customer.setPasswordHash(this.customersService.hashPassword(rawPassword));
        this.customersService.update(customer.convertToEntity());
    }

    @CrossOrigin
    @RequestMapping(value = "/getById", method = RequestMethod.GET)
    public CustomersVM getById(@RequestParam(name = "id") String idS) {
        int id = Integer.parseInt(idS);
        return CustomersVM.convertFromEntity(this.customersService.getByID(id));
    }

    @CrossOrigin
    @RequestMapping(value="/list", method = RequestMethod.GET)
    public List<CustomersVM> list(){
        return this.customersService.list().stream().map(c->CustomersVM.convertFromEntity(c)).collect(Collectors.toList());
    }
}
