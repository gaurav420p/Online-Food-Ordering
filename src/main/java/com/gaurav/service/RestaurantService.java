package com.gaurav.service;

import com.gaurav.dto.RestaurantDto;
import com.gaurav.model.Restaurant;
import com.gaurav.model.User;
import com.gaurav.request.CreateRestaurantRequest;
import com.gaurav.request.LoginRequest;
import org.springframework.stereotype.Service;

import java.util.List;


public interface RestaurantService {

    public Restaurant createRestaurant(CreateRestaurantRequest req, User user);

    public Restaurant updateRestaurant(Long restaurantId, CreateRestaurantRequest updatedRestaurant) throws Exception;

    public void  deleteRestaurant(Long restaurantId) throws Exception;

    public List<Restaurant> getAllRestaurant();

    public List<Restaurant> searchRestaurant(String keyword);

    public Restaurant findRestaurantById(Long id) throws Exception;

    public Restaurant getRestaurantByUserId(Long userId) throws Exception;

    public RestaurantDto addtoFavorites(Long restaurantID,User user) throws Exception;

    public Restaurant updateRestaurantStatus(Long id) throws Exception;



}
