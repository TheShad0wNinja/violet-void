import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import axios from "axios";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  const logout = () => {
    setLoading(true)
    axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/auth/logout`).then(() => {
      setUser(null);
      navigate("/", { replace: true });
      setLoading(false);
    });
  };

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/api/auth/me`)
      .then(res => { 
        setUser(res.data.user);
        setLoading(false);
      })
      .catch(e => console.log(e));
  }, []);

  const login = async user => {
    setUser(user);
    navigate("/");
  };

  return <AuthContext.Provider value={{ user, login, logout, loading }}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);

  if (context === undefined) {
    throw new Error("useAuth needs to be used within a AuthProvider");
  }

  return context;
}
