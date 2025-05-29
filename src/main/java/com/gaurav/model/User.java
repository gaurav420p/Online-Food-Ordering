package com.gaurav.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.gaurav.dto.RestaurantDto;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.List;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private  String fullName;
    private  String email;
    private String password;
    private USER_ROLE role;

    @JsonIgnore //when you return a Customer in a REST API, the orders list will not be included in the response.
    @OneToMany(cascade = CascadeType.ALL,mappedBy = "customer")
    private List<Order> orders=new ArrayList<>();

    @ElementCollection
    private List<RestaurantDto> favorites=new ArrayList<>();

    @OneToMany(cascade = CascadeType.ALL,orphanRemoval = true)// when del user, all addresses will eb deleted
    private List<Address> addresses=new ArrayList<>();






}
