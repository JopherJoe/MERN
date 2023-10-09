import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AdminPrivateRoute = ({ children }) => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const userType = window.localStorage.getItem("userType");
    if (userType !== "admin") {
      navigate("/admin-login");
    } else {
      setIsLoggedIn(true);
    }
  }, [navigate]);

  return isLoggedIn ? children : null;
};

export default AdminPrivateRoute;
