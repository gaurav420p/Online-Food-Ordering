package com.gaurav.service;

import com.gaurav.model.Category;
import com.gaurav.model.Food;
import com.gaurav.model.Restaurant;
import com.gaurav.request.CreateFoodRequest;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FoodServiceImplemenation implements FoodService {
    @Override
    public Food createFood(CreateFoodRequest req, Category category, Restaurant restaurant) {
        return null;
    }

    @Override
    public void deleteFood(long foodId) throws Exception {

    }

    @Override
    public List<Food> getRestaurantsFood(long restaurantId, boolean isVegetarian, boolean isNonveg, boolean isSeasonal, String foodCategory) {
        return List.of();
    }

    @Override
    public List<Food> searchFood(String keyword) {
        return List.of();
    }

    @Override
    public Food findFoodById(long foodId) throws Exception {
        return null;
    }

    @Override
    public Food updateAvailabilityStatus(Long foodId) throws Exception {
        return null;
    }
}
