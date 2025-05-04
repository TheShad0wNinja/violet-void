import { createContext, useState, useEffect } from "react";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem("token"));
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token"); 
    setUser(null);
    navigate("/", { replace: true }); // come back and make sure route is correct
  };

  useEffect(() => {
    setToken(localStorage.getItem("token"));
    if (token) {
      try {
        const decode = jwtDecode(token);
        const currentTime = Date.now() / 1000;
        if (decode.exp < currentTime) {
          console.log("token expired, loging out");
          logout();
        } else {
          setUser(token);
        }
      } catch {
        console.error("invalid token, logging out");
        logout();
      }
    } else {
      console.log("token not found, user isnt logged in");
    }
  }, []);

  const login = token => {
    localStorage.setItem("token", token);
    setUser(token);
  };
  return (
    <AuthContext.Provider value={{ user, login, logout, token }}>{children}</AuthContext.Provider>
  );
};
