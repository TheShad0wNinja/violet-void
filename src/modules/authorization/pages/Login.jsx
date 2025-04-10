import React, { useEffect } from "react";
import { useFormik } from "formik";
import WhiteTextInputBox from "../components/WhiteTextInputBox";
import WhiteDobBox from "../components/WhiteDobBox";
import { Button } from "@modules/_shared/App";
import * as Yup from "yup";
import AOS from "aos";

function Login({switchPage}) {
  const formik = useFormik({
    initialValues: {
      username: "",
      password: ""
    },
    validationSchema: Yup.object({
      username: Yup.string().required("Username is required"),
      password: Yup.string().required("Password is required")
    }),
    onSubmit: values => {
      console.log("Form submitted:", values);
    }
  });
  return (
    <div>
      <h1 className="mb-4 text-center text-3xl font-bold md:text-5xl" data-aos="fade-up">
        Login
      </h1>
      <h1 className="text-1xl md:text-1xl mb-10 text-center " data-aos="fade-up">
        Please login to your account
      </h1>

      <form onSubmit={formik.handleSubmit}>
        <WhiteTextInputBox
          name="username"
          placeholder="UserName"
          value={formik.values.username}
          onChange={formik.handleChange}
          errormessage={formik.errors.username}
          condition={formik.touched.username && formik.errors.username}
        />
        <WhiteTextInputBox
          name="password"
          placeholder="Password"
          value={formik.values.password}
          onChange={formik.handleChange}
          errormessage={formik.errors.password}
          condition={formik.touched.password && formik.errors.password}
        />

        <div className="mt-5 flex items-center justify-center" data-aos="fade-up" data-aos-duration="1500">
          <Button
            onClick={formik.handleSubmit}
            children="Sign up"
            className="!bg-primary-400 text-md !w-[65%] !p-3 md:!p-4 md:text-xl"
          ></Button>
        </div>
      </form>
      <h1 className="mt-3 text-center text-sm" data-aos="fade-up" data-aos-duration="1500">
        Don’t have an account?
        <span className="text-primary-400 cursor-pointer font-bold"   onClick={() => switchPage()}
        > {" "} Sign up</span>
      </h1>
    </div>
  );
}
export default Login;
