package com.gaurav.config;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.security.Keys;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.AuthorityUtils;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.filter.OncePerRequestFilter;

import javax.crypto.SecretKey;
import java.io.IOException;
import java.util.List;

// Custom filter to validate JWT on each request
public class JwtTokenValidator extends OncePerRequestFilter {

    @Override
    protected void doFilterInternal(HttpServletRequest request,
                                    HttpServletResponse response,
                                    FilterChain filterChain) throws ServletException, IOException {

        // Read the JWT token from the Authorization header
        String jwt = request.getHeader(JwtConstant.JWT_HEADER);

        // If token is present
        if (jwt != null) {
            jwt = jwt.substring(7); // Remove "Bearer " prefix from the token

            try {
                // Generate the secret key using the predefined SECRET_KEY
                SecretKey key = Keys.hmacShaKeyFor(JwtConstant.SECRET_KEY.getBytes());

                // Parse the token and extract claims (payload data)
                Claims claims = Jwts.parserBuilder()
                        .setSigningKey(key) // set the signing key
                        .build()
                        .parseClaimsJws(jwt) // validate and parse the JWT
                        .getBody(); // get payload claims

                // Extract email (user identifier) from claims
                String email = String.valueOf(claims.get("email"));

                // Extract authorities (roles) from claims
                String authorities = String.valueOf(claims.get("authorities"));

                // Convert comma-separated roles into a list of GrantedAuthority
                List<GrantedAuthority> auth = AuthorityUtils.commaSeparatedStringToAuthorityList(authorities);

                // Create an Authentication object using the email and authorities
                Authentication authentication = new UsernamePasswordAuthenticationToken(email, null, auth);

                // Store the authentication object in the security context
                SecurityContextHolder.getContext().setAuthentication(authentication);

            } catch (Exception e) {
                // If token is invalid, throw an error
                throw new BadCredentialsException("Invalid Token......");
            }
        }

        // Continue to the next filter in the chain
        filterChain.doFilter(request, response);
    }
}
