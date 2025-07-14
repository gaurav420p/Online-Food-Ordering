// actions.js
import {
    UPDATE_ORDER_STATUS_REQUEST,
    UPDATE_ORDER_STATUS_SUCCESS,
    UPDATE_ORDER_STATUS_FAILURE,
    GET_RESTAURANTS_ORDER_REQUEST,
    GET_RESTAURANTS_ORDER_SUCCESS,
    GET_RESTAURANTS_ORDER_FAILURE,
} from "./ActionTypes";
import { api } from "../../config/api";

export const updateOrderStatus = ({ orderId, orderStatus, jwt }) => {
    return async (dispatch) => {
        dispatch({ type: UPDATE_ORDER_STATUS_REQUEST });
        
        try {
            const { data } = await api.put(
                `/api/admin/orders/${orderId}/${orderStatus}`,
                {},
                {
                    headers: {
                        Authorization: `Bearer ${jwt}`,
                    },
                }
            );

            console.log("Updated Order: ", data);
            dispatch({
                type: UPDATE_ORDER_STATUS_SUCCESS,
                payload: data,
            });

        } catch (error) {
            console.log("Update Order Status Error: ", error);
            dispatch({
                type: UPDATE_ORDER_STATUS_FAILURE,
                payload: error
            });
        }
    };
};

export const fetchRestaurantsOrder = ({ restaurantId, orderStatus, jwt }) => {
    return async (dispatch) => {
        dispatch({ type: GET_RESTAURANTS_ORDER_REQUEST });
        
        try {
            const { data } = await api.get(
                `/api/admin/orders/restaurant/${restaurantId}`,
                { 
                    params: { order_status: orderStatus },
                    headers: {
                        Authorization: `Bearer ${jwt}`,
                    },
                }
            );

            console.log("Restaurant Orders: ", data);
            dispatch({
                type: GET_RESTAURANTS_ORDER_SUCCESS,
                payload: data,
            });

        } catch (error) {
            console.log("Fetch Restaurant Orders Error: ", error);
            dispatch({
                type: GET_RESTAURANTS_ORDER_FAILURE,
                payload: error
            });
        }
    };
};