package cz.osu.ooprproj.controllers;

import cz.osu.ooprproj.model.db.CustomersEntity;
import cz.osu.ooprproj.model.vm.CustomersVM;
import cz.osu.ooprproj.security.*;
import cz.osu.ooprproj.services.CustomersService;
import org.hibernate.validator.constraints.URL;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.DisabledException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;
import java.util.Objects;

@RestController
@CrossOrigin
@RequestMapping("/api")
public class JwtAuthenticationController {
    @Autowired
    private AuthenticationManager authenticationManager;
    @Autowired
    private JwtTokenUtil jwtTokenUtil;
    @Autowired
    private JwtUserDetailsService userDetailsService;
    @Autowired
    private CustomersService customersService;

    @CrossOrigin
    @RequestMapping(value = "/login", method = RequestMethod.POST)
    public ResponseEntity<?> createAuthenticationToken(@RequestBody JwtRequest authenticationRequest) throws Exception {
        authenticate(authenticationRequest.getUsername(), authenticationRequest.getPassword());

        final UserDetails userDetails = userDetailsService.loadUserByUsername(authenticationRequest.getUsername());

        final String token = jwtTokenUtil.generateToken(userDetails);

        CustomersEntity c = this.customersService.getByUsername(authenticationRequest.getUsername());
        c.setToken(token);
        this.customersService.update(c);

        boolean isAdmin = userDetails.getAuthorities().stream().anyMatch(sa -> ((GrantedAuthority) sa).getAuthority().equals("ADMIN"));

        return ResponseEntity.ok(new JwtResponse(token, isAdmin));
    }

    @CrossOrigin
    @RequestMapping(value = "/isValidLogin", method = RequestMethod.GET)
    public boolean isValidLogin(@RequestParam(name = "token") String token) {
        String username = null;
        String jwtToken = null;


        if(token.startsWith("Bearer "))
        {
            jwtToken = token.substring(7);
            try{
                username = jwtTokenUtil.getUsernameFromToken(jwtToken);
            } catch(Exception e){
                return false;
            }
        }
        if(username!=null){
            CustomersEntity c = this.customersService.getByUsername(username);
            if(c.getToken().equals(jwtToken)) {
                UserDetails userDetails = this.userDetailsService.loadUserByUsername(username);
                if (jwtTokenUtil.validateToken(jwtToken, userDetails)) {
                    return true;
                }
            }
        }
        return false;
    }

    private void authenticate(String username, String password) throws Exception {
        Objects.requireNonNull(username);
        Objects.requireNonNull(password);

        try {
            authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(username, password));
        } catch (DisabledException e) {
            throw new Exception("USER_DISABLED", e);
        } catch (BadCredentialsException e) {
            throw new Exception("INVALID_CREDENTIALS", e);
        }
    }
}
