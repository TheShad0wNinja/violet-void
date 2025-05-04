import React, { useEffect } from "react";
import { useFormik } from "formik";
import WhiteTextInputBox from "../components/WhiteTextInputBox";
import WhiteDobBox from "../components/WhiteDobBox";
import { Button } from "@modules/_shared/App";
import * as Yup from "yup";
import { motion } from "framer-motion";
import axios from "axios";
import { useNavigate } from "react-router";
import { useAuth } from "../App";

function Signuppage({ switchPage }) {
  const navigate = useNavigate();
  const {login} = useAuth();
  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
      day: "",
      month: "",
      year: ""
    },
    validationSchema: Yup.object({
      username: Yup.string().min(6).max(10).required("Username is required"),
      email: Yup.string().email("Invalid email").required("Email is required"),
      password: Yup.string().min(6, "Minimum 6 characters").required("Password is required"),
      day: Yup.string()
        .required("Day is required")
        .matches(/^(0?[1-9]|[12][0-9]|3[01])$/, "Day must be between 1 and 31"),
      month: Yup.string()
        .required("Month is required")
        .matches(/^(0?[1-9]|1[0-2])$/, "Month must be between 1 and 12"),
      year: Yup.string()
        .required("Year is required")
        .matches(/^[0-9]{4}$/, "Must be a 4-digit year")
    }).test("is-valid-date", "Date of birth is not valid", function (values) {
      const { day, month, year } = values;
      const date = new Date(`${day}-${month}-${year}`);

      const isValidDate =
        date.getFullYear() === Number(year) &&
        date.getMonth() + 1 === Number(month) &&
        date.getDate() === Number(day);

      return isValidDate;
    }),
    onSubmit: async values => {
      console.log("Form submitted:", values);
      try { 
        const response = await axios.post(`${backendUrl}/api/auth/register`, {
          username: formik.values.username,
          email: formik.values.email,
          password: formik.values.password
        });
        console.log(response.data);
        // login(response.data)
        // navigate("/");
      } catch (error) {
        if (error.response) {
          const msg = error.response.data?.message?.toLowerCase();
          if (msg && msg?.includes("email"))
            formik.setFieldError("email", msg)
          else if (msg && msg?.includes("username"))
            formik.setFieldError("username", msg)
        }
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
        className="mb-10 text-center text-3xl font-bold md:text-4xl"
      >
        Sign up
      </motion.h1>
      <form onSubmit={formik.handleSubmit}>
        <WhiteTextInputBox
          Itemscenter
          name="username"
          placeholder="UserName"
          value={formik.values.username}
          onChange={formik.handleChange}
          errormessage={formik.errors.username}
          condition={formik.touched.username && formik.errors.username}
          fullwidth
        />
        <WhiteTextInputBox
          name="email"
          Itemscenter
          placeholder="Email"
          value={formik.values.email}
          onChange={formik.handleChange}
          errormessage={formik.errors.email}
          condition={formik.touched.email && formik.errors.email}
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
        <WhiteDobBox
          datevalue={formik.values.day}
          dateonchange={formik.handleChange}
          monthvalue={formik.values.month}
          monthonchange={formik.handleChange}
          yearvalue={formik.values.year}
          yearonchange={formik.handleChange}
          condition={
            (formik.touched.day && formik.errors.day) ||
            (formik.touched.month && formik.errors.month) ||
            (formik.touched.year && formik.errors.year)
          }
          errormessage={formik.errors.day || formik.errors.month || formik.errors.year}
        />
        <div className="mt-5 flex items-center justify-center">
          <Button
            onClick={formik.handleSubmit}
            children="Sign up"
            className="!bg-primary-400 text-md !w-[65%] !p-3 md:!p-4 md:text-xl"
          ></Button>
        </div>
      </form>
      <h1 className="mt-3 text-center text-sm">
        Already have an account?
        <span className="text-primary-400 cursor-pointer font-bold" onClick={() => switchPage()}>
          {" "}
          Login
        </span>
      </h1>
    </motion.div>
  );
}

export default Signuppage;
