package cz.osu.ooprproj.services;

import cz.osu.ooprproj.security.JwtTokenUtil;
import cz.osu.ooprproj.security.JwtUserDetailsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.DisabledException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ServerErrorException;

@Service
public class AuthService {
    @Autowired
    AuthenticationManager authenticationManager;
    @Autowired
    JwtUserDetailsService userDetailsService;
    @Autowired
    JwtTokenUtil jwtTokenUtil;

    public String login(String username, String password)
    {
        try {
            authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(username, password));
        }   catch (DisabledException e){
            throw new RuntimeException("USER_DISABLED, e");
        }catch (BadCredentialsException e) {
            throw new RuntimeException("INVALID_CREDENTIALS", e);
       }

        final UserDetails userDetails = userDetailsService.loadUserByUsername(username);
        final String token = jwtTokenUtil.generateToken(userDetails);
        System.out.println(token);
        return token;
    }
}
