package com.gaurav.repository;
import com.gaurav.model.IngredientsItem;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface IngredientsItemRepository extends JpaRepository<IngredientsItem,Long> {
    List<IngredientsItem> findByRestaurantId(Long id);
}
