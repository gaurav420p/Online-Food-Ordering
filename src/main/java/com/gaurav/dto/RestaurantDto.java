package com.gaurav.dto;

import jakarta.persistence.Column;
import jakarta.persistence.Embeddable;
import lombok.Data;

import java.util.List;

@Data
@Embeddable //is a JPA annotation that marks the class as a value object to be embedded in another entity, meaning its fields will be part of the owning entity’s table
public class RestaurantDto {
    private String title;

    @Column(length = 1000)
    private List<String> images;

    private String description;
    private Long id;



}
