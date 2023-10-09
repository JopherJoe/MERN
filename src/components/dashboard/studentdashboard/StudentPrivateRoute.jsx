import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const StudentPrivateRoute = ({ children }) => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const userType = window.localStorage.getItem("userType");
    if (userType !== "student") {
      navigate("/student-login");
    } else {
      setIsLoggedIn(true);
    }
  }, [navigate]);

  return isLoggedIn ? children : null;
};

export default StudentPrivateRoute;
