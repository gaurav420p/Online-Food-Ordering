package com.gaurav.request;

import com.gaurav.model.Address;
import lombok.Data;

@Data
public class OrderRequest {
    public Long RestaurantId;
    private Address deliveryAddress;
}
