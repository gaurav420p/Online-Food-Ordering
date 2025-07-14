import { 
  ADD_TO_FAVORITE_FAILURE, ADD_TO_FAVORITE_REQUEST, ADD_TO_FAVORITE_SUCCESS,
  GET_USER_FAILURE, GET_USER_REQUEST, GET_USER_SUCCESS,
  LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS,
  LOGOUT,
  REGISTER_FAILURE, REGISTER_REQUEST, REGISTER_SUCCESS
} from "./ActionTypes";

import { api } from "../../config/api";

// Register User
export const registerUser = (reqData) => async (dispatch) => {
  dispatch({ type: REGISTER_REQUEST });
  try {
    const { data } = await api.post(`/auth/signup`, reqData.userData);
    
    if (data.jwt) localStorage.setItem("jwt", data.jwt);

    if (data.role === "ROLE_RESTAURANT_OWNER") {
      reqData.navigate("/admin/restaurant");
    } else {
      reqData.navigate("/");
    }

    dispatch({ type: REGISTER_SUCCESS, payload: data.jwt });
    console.log("register success", data);

  } catch (error) {
    dispatch({ type: REGISTER_FAILURE, payload: error });
    console.log("Register error:", error);
  }
};

// Login User
export const loginUser = (reqData) => async (dispatch) => {
  dispatch({ type: LOGIN_REQUEST });
  try {
    const { data } = await api.post(`/auth/signin`, reqData.userData);

    if (data.jwt) localStorage.setItem("jwt", data.jwt);

    if (data.role === "ROLE_RESTAURANT_OWNER") {
      reqData.navigate("/admin/restaurant");
    } else {
      reqData.navigate("/");
    }

    dispatch({ type: LOGIN_SUCCESS, payload: data.jwt });
    console.log("login success", data);

  } catch (error) {
    dispatch({ type: LOGIN_FAILURE, payload: error });
    console.log("Login error:", error);
  }
};

// Get User Profile
export const getUser = (jwt) => async (dispatch) => {
  dispatch({ type: GET_USER_REQUEST });
  try {
    const { data } = await api.get(`/api/users/profile`, {
      headers: {
        Authorization: `Bearer ${jwt}`  
      }
    });

    dispatch({ type: GET_USER_SUCCESS, payload: data });
    console.log("User Profile", data);

  } catch (error) {
    dispatch({ type: GET_USER_FAILURE, payload: error });
    console.log(" error:", error);
  }
};

// Add to Favorite
export const addToFavorite = (jwt, restaurantId) => async (dispatch) => {
  dispatch({ type: ADD_TO_FAVORITE_REQUEST });
  try {
    const { data } = await api.put(`/api/restaurants/${restaurantId}/add-favorites`, {}, {
      headers: {
        Authorization: `Bearer ${jwt}`  // ✅ Fixed casing here
      }
    });

    dispatch({ type: ADD_TO_FAVORITE_SUCCESS, payload: data });
    console.log("ADD TO FAVORITE", data);

  } catch (error) {
    dispatch({ type: ADD_TO_FAVORITE_FAILURE, payload: error });
    console.log("Favorite error:", error);
  }
};

// Logout
export const logOut = () => async (dispatch) => {

  try {
    localStorage.clear();
    dispatch({ type: LOGOUT });
    console.log("Logout Success");

  } catch (error) {
    console.log("Logout error:", error);
  }
};
