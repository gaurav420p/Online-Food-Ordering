package com.gaurav.service;

import com.gaurav.model.Category;

import java.util.List;

public interface CategoryService {

    public Category createCategory(String name,Long userid) throws Exception;

    public List<Category> findCategoryByRestaurantId(Long id) throws Exception;

    public Category findCategoryById(Long id) throws Exception;
}
