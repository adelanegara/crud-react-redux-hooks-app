import React, { createContext, useReducer } from "react";
import fileReducer from "./reducers/fileReducer";

const initialState = {
  photos: [],
  isLogin: false,
  userData: null,
  account: [
    {
      email: "adela@admin.com",
      password: "adela123",
      role: "admin",
      name: "Adela Admin",
      location: "New York",
    },
    {
      email: "adela@user.com",
      password: "adela123",
      role: "user",
      name: "Adela User",
      location: "Tokyo",
    },
  ],
};

// Create Context
export const GlobalContext = createContext(initialState);

// Provider Component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(fileReducer, initialState);

  // Actions
  const onLogout = () => {
    dispatch({ type: "LOGOUT" });
  };

  const setUserData = (data) => {
    dispatch({ type: "SET_USER_DATA", payload: data });
  };

  const deletePhotos = (id) => {
    dispatch({ type: "DELETE_PHOTOS", payload: id });
  };

  const addPhotos = (data) => {
    dispatch({ type: "ADD_PHOTOS", payload: data });
  };

  const updatePhotos = (data) => {
    dispatch({ type: "UPDATE_PHOTOS", payload: data });
  };
  const onLogin = () => {
    dispatch({ type: "LOGIN" });
  };

  return (
    <GlobalContext.Provider
      value={{
        isLogin: state.isLogin,
        account: state.account,
        photos: state.photos,
        userData: state.userData,
        onLogout,
        setUserData,
        deletePhotos,
        addPhotos,
        updatePhotos,
        onLogin,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
