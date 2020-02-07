package cz.osu.ooprproj.security;

import cz.osu.ooprproj.model.vm.CustomersVM;
import cz.osu.ooprproj.services.CustomersService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.*;
import org.springframework.stereotype.Service;

import java.util.Arrays;

@Service
public class JwtUserDetailsService implements UserDetailsService {
    private final CustomersService customersService;

    public JwtUserDetailsService(@Autowired CustomersService customersService) {
        this.customersService = customersService;
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        CustomersVM customer = null;
        if ((customer = CustomersVM.convertFromEntity(this.customersService.getByUsername(username))) == null)
            throw new UsernameNotFoundException("User not found with username: " + username);
        else {
            SimpleGrantedAuthority isAdmin = new SimpleGrantedAuthority(customer.isAdmin() ? "ADMIN" : "USER");
            return new User(customer.getUsername(), customer.getPasswordHash(), Arrays.asList(isAdmin));
        }
    }
}
