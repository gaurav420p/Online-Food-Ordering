package com.gaurav.service;

import com.gaurav.model.Category;
import com.gaurav.model.Food;
import com.gaurav.model.Restaurant;
import com.gaurav.request.CreateFoodRequest;
import java.util.*;

public interface FoodService {

    public Food createFood(CreateFoodRequest req, Category category, Restaurant restaurant);

    void deleteFood(long foodId) throws Exception;

    public List<Food> getRestaurantsFood(long restaurantId,
                                         boolean isVegetarian,  // Corrected spelling
                                         boolean isNonveg,
                                         boolean isSeasonal,
                                         String foodCategory);

    public List<Food> searchFood(String keyword);

    public Food findFoodById(long foodId) throws Exception;

    public Food updateAvailabilityStatus(Long foodId) throws Exception;

}
