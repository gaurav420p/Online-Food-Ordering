package com.gaurav.config;

import jakarta.servlet.http.HttpServletRequest;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.www.BasicAuthenticationFilter;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;

import java.util.Arrays;
import java.util.Collection;
import java.util.Collections;
import static java.util.Arrays.asList;

@Configuration
@EnableWebSecurity
public class AppConfig {
     @Bean
     public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
         http
                 // 🔒 Makes the application stateless (no HTTP session)
                 .sessionManagement(management ->
                         management.sessionCreationPolicy(SessionCreationPolicy.STATELESS)
                 )

                 // ✅ Authorization rules
                 .authorizeHttpRequests(authorize ->
                         authorize
                                 // 🔐 Only users with RESTAURANT_OWNER or ADMIN role can access /api/admin/**
                                 .requestMatchers("/api/admin/**").hasAnyRole("RESTAURANT_OWNER", "ADMIN")

                                 // 🔐 All /api/** requests require authentication
                                 .requestMatchers("/api/**").authenticated()

                                 // 🌐 All other requests (not matching above) are allowed without login
                                 .anyRequest().permitAll()

                 ).addFilterBefore(new JwtTokenValidator(), BasicAuthenticationFilter.class)
                 .csrf(csrf->csrf.disable())
                 .cors(cors->cors.configurationSource(corsconfigurationSource()));

         return http.build();

    }

    private CorsConfigurationSource corsconfigurationSource() {
        return new CorsConfigurationSource() {
            @Override
            public CorsConfiguration getCorsConfiguration(HttpServletRequest request) {
                CorsConfiguration cfg = new CorsConfiguration();

                // 1. Allow requests from your React frontend
                cfg.setAllowedOrigins(asList("http://localhost:5173"));

                // 2. Allow all HTTP methods (GET, POST, PUT, DELETE, etc.)
                cfg.setAllowedMethods(Collections.singletonList("*"));

                // 3. Allow sending credentials (cookies, auth headers)
                cfg.setAllowCredentials(true);

                // 4. Allow all headers in the request
                cfg.setAllowedHeaders(Collections.singletonList("*"));

                // 5. Let frontend access the Authorization header in the response
                cfg.setExposedHeaders(Arrays.asList("Authorization"));

                // 6. Cache the CORS response for 1 hour
                cfg.setMaxAge(3600L);

                return cfg;
            }
        };
    }

    @Bean
    PasswordEncoder passwordEncoder(){
         return new BCryptPasswordEncoder();
    }
}
