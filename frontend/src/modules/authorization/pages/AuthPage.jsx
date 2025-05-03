import React, { useContext, useEffect, useState } from "react";
import authobackground from "../assets/authobackground.png";
import Signuppage from "./Signuppage";
import Login from "./Login";
import { useParams } from "react-router";
import { BrowserRouter as Router, Route, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
// import { useAuth } from "../App";
import { AuthContext } from "../utils/AuthContext";

function AuthPage() {
    const AuthCon = useContext(AuthContext);
  
  const [authMethod, setAuthMethod] = useState(false);
  const { page } = useParams();
  const navigate = useNavigate();
  const { user, logout } = AuthCon;

  useEffect(() => {
    if (!["login", "signup"].includes(page)) navigate("/auth/signup");

    if (user !== null) navigate("/");

		if (page === "logout")
			logout();	
  }, [page]);

  // if (!page || !["login", "signup"].includes(page)) {
  //   return null; // or a loader if you want
  // }

  const handlePageChange = newpage => {
    console.log("auth page param:", page);

    navigate(`/auth/${newpage}`);
  };

  return (
    <div className="flex h-screen w-full items-center justify-center">
      <div className="border-secondary relative flex h-[90%] w-[90%] items-center justify-center overflow-hidden rounded-2xl border-2">
        <motion.div
          initial={{ scale: 0.8, y: 30, opacity: 0 }}
          animate={{ scale: 1, y: 0, opacity: 1 }}
          transition={{
            duration: 1.5,
            ease: [0.16, 1, 0.3, 1]
          }}
          className="z-0 h-[95%] w-[95%] overflow-hidden rounded-2xl"
          style={{
            backgroundImage: `url(${authobackground})`,
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}
        >
          <div className="bg-primary/25 bg-op flex h-full w-full items-center justify-center overflow-y-auto rounded-l-2xl text-white transition-all duration-300 ease-in-out md:w-[50%]">
            <div className="h-auto w-full md:w-[85%]">
              {page === "signup" ? (
                <Signuppage switchPage={() => handlePageChange("login")} />
              ) : (
                <Login switchPage={() => handlePageChange("signup")} />
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default AuthPage;
