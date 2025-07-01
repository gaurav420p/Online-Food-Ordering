package com.gaurav.service;

import com.gaurav.model.USER_ROLE;
import com.gaurav.model.User;
import com.gaurav.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class CustomerUserDetailsService implements UserDetailsService {

    @Autowired
    private UserRepository userRepository;

    // This method is called by Spring Security to load the user by username (email in this case) during login.
    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        // Find the user by email from the database.
        User user = userRepository.findByEmail(username);

        // If the user is not found, throw an exception to tell Spring Security login has failed.
        if (user == null) {
            throw new UsernameNotFoundException("User not found with email " + username);
        }

        // Get the role of the user (e.g., USER or ADMIN).
        USER_ROLE role = user.getRole();

        // Create a list to store granted authorities (permissions/roles).
        List<GrantedAuthority> authorities = new ArrayList<>();

        // Convert the role enum to SimpleGrantedAuthority (Spring Security’s way of handling roles).
        authorities.add(new SimpleGrantedAuthority(role.toString()));

        // Return a Spring Security User object with email as username, password, and authorities.
        return new org.springframework.security.core.userdetails.User(
                user.getEmail(),     // username
                user.getPassword(), // password (already hashed)
                authorities          // list of authorities
        );
    }
}

