package com.gaurav.repository;

import com.gaurav.model.IngredientsCategory;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface IngredientsCategoryRepository extends JpaRepository<IngredientsCategory,Long> {

    List<IngredientsCategory> findByRestaurantId(Long id);
}
