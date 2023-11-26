import { Fragment } from "react";
import { Navigate } from "react-router-dom";

const RouterRole = ({ role, roles = [], children }) => {
  return !roles.length || roles.includes(role) ? (
    <Fragment> {children}</Fragment>
  ) : (
    <Navigate to="/" replace />
  );
};

export default RouterRole;
