import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector, connect } from "react-redux";

function ProtectedRoute({ children, users }) {
  // const users = useSelector((state) => state.auth.users);

  if (!users) {
    return <Navigate to="/login" replace="true" />;
  }

  return children;
}

const mapStateToProps = (state) => {
  return {
    users: state.auth.users,
  };
};
export default connect(mapStateToProps)(ProtectedRoute);