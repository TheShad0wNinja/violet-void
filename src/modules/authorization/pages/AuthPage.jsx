import React, { useEffect, useState } from "react";
import authobackground from "../assets/authobackground.png";
import Signuppage from "./Signuppage";
import Login from "./Login";
import { useParams } from "react-router";
import { BrowserRouter as Router, Route, useNavigate } from "react-router-dom";

function AuthPage() {
  const [authMethod, setAuthMethod] = useState(false);
  const { page } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (!["login", "signup"].includes(page)) navigate("/auth/signup");
  }, [page]);

  const handlePageChange = newpage => {
    navigate(`/auth/${newpage}`);
  };

  return (
    <div className="flex h-screen w-full items-center justify-center">
      <div className="border-secondary relative flex h-[90%] w-[90%] items-center justify-center overflow-hidden rounded-2xl border-2">
        <div
          className="z-0 h-[95%] w-[95%] rounded-2xl"
          style={{
            backgroundImage: `url(${authobackground})`,
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}
          data-aos="zoom-in"
        >
          <div
            className="bg-primary/25 bg-op flex h-full w-full items-center justify-center overflow-y-auto rounded-l-2xl text-white transition-all duration-300 ease-in-out md:w-[50%]"
            data-aos="fade-right"
            data-aos-duration="1500"
          >
            <div className="h-auto w-full md:w-[85%]">
              {page === "signup" ? (
                <Signuppage switchPage={() => handlePageChange("login")} />
              ) : (
                <Login switchPage={() => handlePageChange("signup")} />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AuthPage;
