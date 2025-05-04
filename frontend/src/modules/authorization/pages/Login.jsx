import React, { useContext, useEffect } from "react";
import { useFormik } from "formik";
import WhiteTextInputBox from "../components/WhiteTextInputBox";
import WhiteDobBox from "../components/WhiteDobBox";
import { Button } from "@modules/_shared/App";
import * as Yup from "yup";
import { motion } from "framer-motion";
import { AuthContext } from "../utils/AuthContext";
import { useNavigate } from "react-router";
import axios from "axios";

function Login({ switchPage }) {
  const { login, user } = useContext(AuthContext);
  const navigate = useNavigate();
  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  const formik = useFormik({
    initialValues: {
      username: "",
      password: ""
    },
    validationSchema: Yup.object({
      username: Yup.string().required("Username is required"),
      password: Yup.string().required("Password is required")
    }),
    onSubmit: async values => {
      console.log("Form submitted:", values);
      // const user = getGamingProfiles().find(
      //   a => a.profile.name.toLowerCase() === values.username.toLowerCase()
      // );
      // if (!user) formik.setErrors({ username: "No user with this name " });
      try {
        const response = await axios.post(`${backendUrl}/api/auth/login`, {
          username: values.username,
          password: values.password
        });
        const data = await response.data;

        login(data.token);
        navigate("/");
      } catch (error) {
        console.error("Login Error:", error);
      }
    }
  });
  return (
    <motion.div
      initial={{ y: -150, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: 1.8,
        ease: [0.16, 1, 0.3, 1]
      }}
    >
      <motion.h1
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{
          duration: 1.8,
          ease: [0.16, 1, 0.3, 1]
        }}
        className="mb-4 text-center text-3xl font-bold md:text-5xl"
      >
        Login
      </motion.h1>
      <motion.h1
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{
          duration: 1.8,
          ease: [0.16, 1, 0.3, 1]
        }}
        className="text-1xl md:text-1xl mb-10 text-center"
      >
        Please login to your account
      </motion.h1>

      <form onSubmit={formik.handleSubmit}>
        <WhiteTextInputBox
          name="username"
          Itemscenter
          placeholder="UserName"
          value={formik.values.username}
          onChange={formik.handleChange}
          errormessage={formik.errors.username}
          condition={formik.touched.username && formik.errors.username}
          fullwidth
        />
        <WhiteTextInputBox
          name="password"
          Itemscenter
          placeholder="Password"
          value={formik.values.password}
          onChange={formik.handleChange}
          errormessage={formik.errors.password}
          condition={formik.touched.password && formik.errors.password}
          fullwidth
        />

        <div className="mt-5 flex items-center justify-center">
          <Button
            onClick={formik.handleSubmit}
            children="Login"
            className="!bg-primary-400 text-md !w-[65%] !p-3 md:!p-4 md:text-xl"
          ></Button>
        </div>
      </form>
      <h1 className="mt-3 text-center text-sm">
        Don’t have an account?
        <span className="text-primary-400 cursor-pointer font-bold" onClick={() => switchPage()}>
          {" "}
          Sign up
        </span>
      </h1>
    </motion.div>
  );
}
export default Login;
