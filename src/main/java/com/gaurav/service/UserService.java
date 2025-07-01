package com.gaurav.service;

import com.gaurav.model.User;



public interface UserService {
    public User findUserByJwtToken(String Jwt) throws Exception;

    public User findUserByEmail(String email) throws Exception;

}
