import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
	const navigate = useNavigate();

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("user") || null));
  }, []);

	const login = (newUser) => {
    localStorage.setItem("user", JSON.stringify(newUser));
    setUser(newUser);
		navigate("/")
	}

	const logout = () => {
		setUser(null);
    localStorage.clear("user");
		navigate("/")
	}
	

  return <AuthContext.Provider value={{ user, login, logout }}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);

  if (context === undefined) throw new Error("useAuth needs to be used within a AuthProvider");

  return context;
}
