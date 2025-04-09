import React, { useState } from "react";
import authobackground from "../assets/authobackground.png";
import { Formik, Form, Field, ErrorMessage } from "formik";
import WhiteTextInputBox from "../components/WhiteTextInputBox";
import WhiteDobBox from "../components/WhiteDobBox";

function Signuppage() {
  const [signupData, setSignupData] = useState({
    username: "",
    email: "",
    password: "",
    dob: ""
  });
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
        >
          <div className="bg-primary/25 bg-op flex h-full w-1/2 items-center rounded-l-2xl text-white">
            <div className="h-[80%] w-full">
              <h1 className="mb-10 text-center text-5xl font-bold">Create an account</h1>
              <Formik>
                <Form>
                  <WhiteTextInputBox
                    name="UserName"
                    placeholder="UserName"
                    // value={formik.values.email}
                    // onChange={formik.handleChange}
                  ></WhiteTextInputBox>
                  <WhiteTextInputBox
                    name="email"
                    placeholder="Email"
                    // value={formik.values.email}
                    // onChange={formik.handleChange}
                  ></WhiteTextInputBox>
                  <WhiteTextInputBox
                    name="Password"
                    placeholder="Password"
                    // value={formik.values.email}
                    // onChange={formik.handleChange}
                  ></WhiteTextInputBox>
                  <WhiteDobBox
                   datevalue="" dateonchange="" monthvalue="" monthonchange="" yearvalue="" yearonchange=""
                  ></WhiteDobBox>
                </Form>
              </Formik>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signuppage;
