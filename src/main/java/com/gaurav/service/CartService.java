package com.gaurav.service;

import com.gaurav.model.Cart;
import com.gaurav.model.CartItem;
import com.gaurav.request.AddCartItemRequest;
import org.springframework.stereotype.Service;

@Service
public interface CartService {
    CartItem addItemToCart(AddCartItemRequest req, String jwt) throws Exception;

    CartItem updateCartItemQuantity(Long cartItemId, int quantity) throws Exception;

    Cart removeItemFromCart(Long cartItemId, String jwt) throws Exception;

    Long calculateCartTotals(Cart cart) throws Exception;

    Cart findCartById(Long id) throws Exception;

    Cart findCartByUserId(Long userId) throws Exception;

    Cart clearCart(Long userId) throws Exception;
}
