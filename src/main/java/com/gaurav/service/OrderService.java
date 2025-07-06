package com.gaurav.service;

import com.gaurav.model.Order;
import com.gaurav.model.User;
import com.gaurav.request.OrderRequest;

import java.util.List;

public interface OrderService {

    public Order createOrder(OrderRequest order, User user) throws Exception;

    public Order updateOrder(long orderId, String orderStatus) throws Exception;

    public void cancelOrder(long orderId) throws Exception;

    public List<Order> getUsersOrder(long userId) throws Exception;

    public List<Order> getRestaurantsOrder(long restaurantId, String orderStatus) throws Exception;

    public Order findOrderById(Long OrderId) throws Exception;

}
