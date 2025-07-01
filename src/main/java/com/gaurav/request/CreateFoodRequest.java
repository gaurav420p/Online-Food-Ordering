package com.gaurav.request;

import com.gaurav.model.Category;
import com.gaurav.model.IngredientsItem;

import java.util.List;

public class CreateFoodRequest {
    private String name;
    private String description;

    private Long price;
    private Category category;
    private List<String> images;

    private Long restaurantId;
    private boolean vegeterian;
    private boolean seasonal;
    private List<IngredientsItem> ingredients;
}
