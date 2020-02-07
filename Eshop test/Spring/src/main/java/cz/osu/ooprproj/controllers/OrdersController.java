package cz.osu.ooprproj.controllers;

import com.fasterxml.jackson.core.JsonGenerator;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import cz.osu.ooprproj.model.db.OrdersEntity;
import cz.osu.ooprproj.model.vm.DiscountsVM;
import cz.osu.ooprproj.model.vm.OrderAddrVM;
import cz.osu.ooprproj.model.vm.OrdersProductsVM;
import cz.osu.ooprproj.model.vm.OrdersVM;
import cz.osu.ooprproj.security.JwtTokenUtil;
import cz.osu.ooprproj.services.CustomersService;
import cz.osu.ooprproj.services.OrdersProductsService;
import cz.osu.ooprproj.services.OrdersService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.support.SimpleTriggerContext;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.time.Month;
import java.util.List;
import java.util.OptionalInt;
import java.util.stream.Collectors;

//http://localhost:8080/api/orders/addToCart
@RestController
@RequestMapping("/api/orders")

public class OrdersController {
    private final OrdersService ordersService;
    private final CustomersService customersService;
    private final OrdersProductsService ordersProductsService;
    @Autowired
    private JwtTokenUtil jwtTokenUtil;

    public OrdersController(@Autowired OrdersService ordersService,
                            @Autowired OrdersProductsService ordersProductsService,
                            @Autowired CustomersService customersService) {
        this.ordersService = ordersService;
        this.ordersProductsService = ordersProductsService;
        this.customersService = customersService;
    }

    @CrossOrigin
    @RequestMapping(value = "/get", method = RequestMethod.GET)
    public OrdersVM get(@RequestParam(name = "orderID") String orderIdS) {
        int orderId = Integer.parseInt(orderIdS);
        return OrdersVM.convertFromEntity(this.ordersService.getById(orderId));
    }

    @CrossOrigin
    @RequestMapping(value = "/getCartID", method = RequestMethod.GET)
    public int getCartID(@RequestParam(name = "username") String username) {
        int customerID = this.customersService.getByUsername(username).getId();
        OptionalInt orderID = ordersService.list().stream()
                .filter(o -> o.getCustomerid() == customerID)
                .filter(o -> o.getIsfinished() == false)
                .mapToInt(o -> o.getId())
                .findFirst();
        if (orderID.isPresent())
            return orderID.getAsInt();
        else
            return createCart(username);
    }

    @CrossOrigin
    @RequestMapping(value = "/list", method = RequestMethod.GET)
    public List<OrdersVM> list() {
        return this.ordersService.list().stream()
                .map(o -> OrdersVM.convertFromEntity(o))
                .collect(Collectors.toList());
    }

    @CrossOrigin
    @RequestMapping(value = "/listUnfinished", method = RequestMethod.GET)
    public List<OrdersVM> listUnfinished() {
        return this.ordersService.list().stream()
                .filter(o -> o.getIsfinished())
                .map(o -> OrdersVM.convertFromEntity(o))
                .collect(Collectors.toList());
    }

    @CrossOrigin
    @RequestMapping(value = "/delete", method = RequestMethod.DELETE)
    public void delete(@RequestParam(name = "orderID") String orderIdS) {
        int orderID = Integer.parseInt(orderIdS);
        this.ordersService.delete(this.ordersService.getById(orderID));
    }

    @CrossOrigin
    @RequestMapping(value = "/listByUsername", method = RequestMethod.GET)
    public List<OrdersVM> listByUsername(@RequestParam(name = "username") String username) {
        int customerID = this.customersService.getByUsername(username).getId();
        return ordersService.list().stream()
                .filter(o -> o.getCustomerid() == customerID)
                .filter(o -> o.getIsfinished() == true)
                .map(o -> OrdersVM.convertFromEntity(o))
                .collect(Collectors.toList());
    }

    @CrossOrigin
    @RequestMapping(value = "/itemsList", method = RequestMethod.GET)
    public List<OrdersProductsVM> itemList(@RequestParam(name = "orderID") String orderIdS) {
        int orderID = Integer.parseInt(orderIdS);

        return this.ordersService.getAllItems(orderID).stream()
                .map(op -> OrdersProductsVM.convertFromEntity(op))
                .collect(Collectors.toList());
    }

    @CrossOrigin
    @RequestMapping(value = "/addToCart", method = RequestMethod.POST)
    public int addToCart(@RequestBody OrdersProductsVM cartItem,
                         @RequestParam(name = "username") String username) {
        int orderID = this.getUsersOrderID(username);
        if (!ordersService.getById(orderID).getIsfinished()) {
            List<OrdersProductsVM> cart = this.getCart(orderID);


            if (cart.stream().anyMatch(op -> op.getProductID() == cartItem.getProductID())) {
                OrdersProductsVM item = cart.stream().filter(op -> op.getProductID() == cartItem.getProductID()).findFirst().get();
                item.setAmount(item.getAmount() + cartItem.getAmount());
                ordersProductsService.update(item.convertToEntity());
                return item.getId();
            } else {
                return this.ordersProductsService.create(cartItem.convertToEntity()).getId();
            }
        } else
            throw new IllegalArgumentException();
    }

    @CrossOrigin
    @RequestMapping(value = "/removeFromCart", method = RequestMethod.POST)
    public void removeFromCart(@RequestParam(name = "username") String username,
                               @RequestParam(name = "productID") String productIDS,
                               @RequestParam(name = "amount") String amountS) {
        int orderID = this.getUsersOrderID(username);
        int productID = Integer.parseInt(productIDS);
        int amount = Integer.parseInt(amountS);
        List<OrdersProductsVM> cart = this.getCart(orderID);
        if (cart.stream().anyMatch(op -> op.getProductID() == productID)) {

            OrdersProductsVM item = cart.stream().filter(op -> op.getProductID() == productID).findFirst().get();
            if (item.getAmount() <= amount) {
                ordersProductsService.delete(item.convertToEntity());
            } else {
                item.setAmount(item.getAmount() - amount);
                ordersProductsService.update(item.convertToEntity());
            }
        } else throw new NullPointerException("Item not found in cart");
    }

    @CrossOrigin
    @RequestMapping(value = "/updateCartItemAmount", method = RequestMethod.PATCH)
    public void updateCartItemAmount(@RequestParam(name = "username") String username,
                                     @RequestParam(name = "productID") String productIDS,
                                     @RequestParam(name = "newAmount") String newAmountS) {
        int orderID = this.getUsersOrderID(username);
        int productID = Integer.parseInt(productIDS);
        int newAmount = Integer.parseInt(newAmountS);
        List<OrdersProductsVM> cart = this.getCart(orderID);
        if (cart.stream().anyMatch(op -> op.getProductID() == productID)) {
            OrdersProductsVM item = cart.stream().filter(op -> op.getProductID() == productID).findFirst().get();
            if (newAmount <= 0) {
                ordersProductsService.delete(item.convertToEntity());
            } else {
                item.setAmount(newAmount);
                ordersProductsService.update(item.convertToEntity());
            }
        } else throw new NullPointerException("Item not found in cart");
    }

    @CrossOrigin
    @RequestMapping(value = "/order", method = RequestMethod.POST)
    public OrdersVM createOrder(@RequestBody OrderAddrVM orderAddress,
                                @RequestParam(name = "username") String username) {
        int orderID = this.getUsersOrderID(username);

        OrdersEntity order = ordersService.getById(orderID);
        order.setCity(orderAddress.getCity());
        order.setStreet(orderAddress.getStreet());
        order.setPsc(orderAddress.getPsc());

        return OrdersVM.convertFromEntity(ordersService.finishOrder(order));
    }

    @CrossOrigin
    @RequestMapping(value = "/emptyCart", method = RequestMethod.DELETE)
    public void empetyCart(@RequestParam(name = "username") String username) {
        int orderID = this.getUsersOrderID(username);

        this.ordersProductsService.getOrdersProductsByOrder(orderID)
                .forEach(op -> this.ordersProductsService.delete(op));
    }

    private List<OrdersProductsVM> getCart(int orderID) {
        return this.ordersProductsService.getOrdersProductsByOrder(orderID)
                .stream()
                .map(ope -> OrdersProductsVM.convertFromEntity(ope))
                .collect(Collectors.toList());
    }

    private int getUsersOrderID(String username) {
        int customerID = customersService.getByUsername(username).getId();
        System.out.println(customerID);
        OptionalInt opOrderID = this.ordersService.list().stream()
                .filter(o -> o.getCustomerid() == customerID)
                .filter(o -> !o.getIsfinished())
                .mapToInt(o -> o.getId())
                .findFirst();
        if (opOrderID.isPresent())
            return opOrderID.getAsInt();
        else return createCart(username);
    }

    public int createCart(String username) {
        int customerID = customersService.getByUsername(username).getId();

        OrdersVM newOrder = OrdersVM.convertFromEntity(ordersService.create(customerID));
        return newOrder.getId();
    }
}
