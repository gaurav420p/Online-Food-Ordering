// action.js
import axios from "axios";
import {
    CREATE_INGREDIENT_CATEGORY_FAILURE,
    CREATE_INGREDIENT_CATEGORY_SUCCESS,
    CREATE_INGREDIENT_SUCCESS,
    GET_INGREDIENTS,
    GET_INGREDIENT_CATEGORY_FAILURE,
    GET_INGREDIENT_CATEGORY_SUCCESS,
    UPDATE_STOCK,
} from "./ActionType";
import { API_URL, api } from "../../config/api";

export const getIngredientsOfRestaurant = (id, jwt) => {
    return async (dispatch) => {
        try {
            const response = await api.get(
                `/api/admin/ingredients/restaurant/${id}`,
                {
                    headers: {
                        Authorization: `Bearer ${jwt}`,
                    },
                }
            );
            console.log("get all ingredients ", response.data);
            dispatch({
                type: GET_INGREDIENTS,
                payload: response.data,
            });
        } catch (error) {
            console.log("error", error);
            dispatch({
                type: GET_INGREDIENT_CATEGORY_FAILURE,
                payload: error.message
            });
        }
    }; 
};

export const createIngredient = ({ data, jwt }) => {
    return async (dispatch) => {
        try {
            const response = await api.post('/api/admin/ingredients', data, {
                headers: {
                    Authorization: `Bearer ${jwt}`,
                },
            });
            console.log("create ingredients ", response.data);
            dispatch({
                type: CREATE_INGREDIENT_SUCCESS,
                payload: response.data,
            });
        } catch (error) {
            console.log("error", error);
            dispatch({
                type: CREATE_INGREDIENT_CATEGORY_FAILURE,
                payload: error.message
            });
        }
    };
};

export const createIngredientCategory = ({ data, jwt }) => {
    console.log("data ", data, "jwt", jwt);
    return async (dispatch) => {
        try {
            const response = await api.post('/api/admin/ingredients/category', data, {
                headers: {
                    Authorization: `Bearer ${jwt}`,
                },
            });
            console.log("create ingredients category", response.data);
            dispatch({
                type: CREATE_INGREDIENT_CATEGORY_SUCCESS,
                payload: response.data,
            });
        } catch (error) {
            console.log("error", error);
            dispatch({
                type: CREATE_INGREDIENT_CATEGORY_FAILURE,
                payload: error.message
            });
        }
    };
};

export const getIngredientCategory = ({ id, jwt }) => {
    return async (dispatch) => {
        try {
            const response = await api.get(
                `/api/admin/ingredients/restaurant/${id}/category`,
                {
                    headers: {
                        Authorization: `Bearer ${jwt}`,
                    },
                }
            );
            console.log("get ingredients category", response.data);
            dispatch({
                type: GET_INGREDIENT_CATEGORY_SUCCESS,
                payload: response.data,
            });
        } catch (error) {
            console.log("error", error);
            dispatch({
                type: GET_INGREDIENT_CATEGORY_FAILURE,
                payload: error.message
            });
        }
    };
};

export const updateStockOfIngredient = (id, jwt) => {
    return async (dispatch) => {
        try {
            const { data } = await api.put(
                `/api/admin/ingredients/${id}/stock`,
                {},
                {
                    headers: {
                        Authorization: `Bearer ${jwt}`,
                    },
                }
            );

            dispatch({
                type: UPDATE_STOCK,
                payload: data,
            });
            console.log("Update Ingredients Stock: ", data);
        } catch (error) {
            console.log("Update Stock Error: ", error);
            // Add error dispatch if you have UPDATE_STOCK_FAILURE action
            // dispatch({
            //     type: UPDATE_STOCK_FAILURE,
            //     payload: error.message
            // });
        }
    };
};