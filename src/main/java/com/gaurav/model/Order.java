package com.gaurav.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.gaurav.dto.RestaurantDto;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;
import java.util.List;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "orders")
public class Order {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @ManyToOne
    private User customer;

    @JsonIgnore
    @ManyToOne         //many order have same restaurant
    private Restaurant restaurant;

    private Long totalAmount;

    private String orderStatus;

    private Date createdAt;

    @ManyToOne
    private Address delieveryAddress;

    @OneToMany// one order can have multiple items
    private List<OrderItem> items;

    //private Payment payment

    private int totalItem;

    private int totalPrice;





}
