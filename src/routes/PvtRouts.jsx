import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import PropTypes from "prop-types";

const PvtRouts = ({ children }) => {
  const { user, spinner } = useContext(AuthContext);

  const location = useLocation();

  if (spinner) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  if (user) {
    return children;
  }
  return <Navigate state={location.pathname} to="/login"></Navigate>;
};

export default PvtRouts;
PvtRouts.propTypes = {
  children: PropTypes.node.isRequired,
};
