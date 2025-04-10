import React, { useState } from "react";
import authobackground from "../assets/authobackground.png";
import Signuppage from "./Signuppage";
import Login from "./Login";

function AuthPage() {
    const [authMethod, setAuthMethod] = useState(false);

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
              {authMethod ? <Login switchPage={setAuthMethod}></Login> : <Signuppage switchPage={setAuthMethod}></Signuppage>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AuthPage;
