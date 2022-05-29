import React from "react";
import { Navigate, Route } from "react-router-dom";
import { connect } from "react-redux";

const PrivateRoute = ({ isLogin, component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        return isLogin ? (
          <Component {...props} />
        ) : (
          <Navigate
            to={{ pathname: "/login", state: { from: props.location } }}
          />
        );
      }}
    />
  );
};

const mapStateToProps = (state) => ({
  isLogin: state.isLogin,
});

export default connect(mapStateToProps)(PrivateRoute);
