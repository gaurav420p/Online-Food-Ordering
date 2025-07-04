package com.gaurav.service;

import com.gaurav.dto.RestaurantDto;
import com.gaurav.model.Address;
import com.gaurav.model.Restaurant;
import com.gaurav.model.User;
import com.gaurav.repository.AddressRepository;
import com.gaurav.repository.RestaurantRepository;
import com.gaurav.repository.UserRepository;
import com.gaurav.request.CreateRestaurantRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Service
public class RestaurantServiceImplementation implements RestaurantService{

    @Autowired
    private RestaurantRepository restaurantRepository;

    @Autowired
    private AddressRepository addressRepository;

    @Autowired
    private UserRepository userRepository;

    @Override
    public Restaurant createRestaurant(CreateRestaurantRequest req, User user) {

        Address address = addressRepository.save(req.getAddress());

        Restaurant restaurant = new Restaurant();
        restaurant.setAddress(address);
        restaurant.setContactInformation(req.getContactInformation());
        restaurant.setCuisineType(req.getCuisineType());
        restaurant.setDescription(req.getDescription());
        restaurant.setImages(req.getImages());
        restaurant.setName(req.getName());
        restaurant.setOpeningHours(req.getOpeningHours());
        restaurant.setRegistrationDate(LocalDateTime.now());
        restaurant.setOwner(user);

        return restaurantRepository.save(restaurant);
    }


    @Override
    public Restaurant updateRestaurant(Long restaurantId, CreateRestaurantRequest updatedRestaurant) throws Exception {
        Restaurant restaurant = findRestaurantById(restaurantId);

        if (restaurant.getCuisineType() != null) {
            restaurant.setCuisineType(updatedRestaurant.getCuisineType());
        }

        if (restaurant.getDescription() != null) {
            restaurant.setDescription(updatedRestaurant.getDescription());
        }

        if (restaurant.getName() != null) {
            restaurant.setName(updatedRestaurant.getName());
        }

        return restaurantRepository.save(restaurant);
    }



    @Override
    public void deleteRestaurant(Long restaurantId) throws Exception {
        Restaurant restaurant=findRestaurantById(restaurantId);
        restaurantRepository.delete(restaurant);

    }

    @Override
    public List<Restaurant> getAllRestaurant() {
        return restaurantRepository.findAll();
    }

    @Override
    public List<Restaurant> searchRestaurant(String keyword) {
        return restaurantRepository.findBySearchQuery(keyword);
    }

    @Override
    public Restaurant findRestaurantById(Long id) throws Exception {
        Optional<Restaurant> opt=restaurantRepository.findById(id);
        if(opt.isEmpty()){
            throw new Exception("Restaurant not found with id"+ id);
        }
        return opt.get();
    }

    @Override
    public Restaurant getRestaurantByUserId(Long userId) throws Exception {
       Restaurant restaurant=restaurantRepository.findByOwnerId(userId);
        if(restaurant==null){
            throw new Exception("Restaurant not found with Owner  id"+ userId);
        }
        return restaurant;
    }

    @Override
    public RestaurantDto addtoFavorites(Long restaurantID, User user) throws Exception {
        Restaurant restaurant = findRestaurantById(restaurantID);

//        Creates a simplified object (RestaurantDto) that stores only relevant info.
//
//        This DTO is what will be added to the user's favorites list (not the full Restaurant object).
        RestaurantDto dto = new RestaurantDto();
        dto.setDescription(restaurant.getDescription());
        dto.setImages(restaurant.getImages());
        dto.setTitle(restaurant.getName());
        dto.setId(restaurantID);

        if (user.getFavorites().contains(dto)) {
            user.getFavorites().remove(dto);
        } else {
            user.getFavorites().add(dto);
        }
        userRepository.save(user);
        return dto;

    }

    @Override
    public Restaurant updateRestaurantStatus(Long id) throws Exception {
        Restaurant restaurant=findRestaurantById(id);
        restaurant.setOpen(!restaurant.isOpen());
        return restaurantRepository.save(restaurant);
    }
}
