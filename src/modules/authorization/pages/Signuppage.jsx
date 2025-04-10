import React from "react";
import authobackground from "../assets/authobackground.png";
import { useFormik } from "formik";
import WhiteTextInputBox from "../components/WhiteTextInputBox";
import WhiteDobBox from "../components/WhiteDobBox";
import { Button } from "@modules/_shared/App";
import * as Yup from "yup";

function Signuppage() {
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
      const date = new Date(`${ day}-${month}-${year}`);

      const isValidDate =
        date.getFullYear() === Number(year) &&
        date.getMonth() + 1 === Number(month) &&
        date.getDate() === Number(day);

      return isValidDate;
    }),
    onSubmit: values => {
      console.log("Form submitted:", values);
    }
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
          <div className="bg-primary/25 bg-op flex h-full transition-all duration-300 ease-in-out md:w-[50%] w-full items-center justify-center rounded-l-2xl text-white  overflow-y-auto">
          <div className="h-[80%] w-full md:w-[85%]">
          <h1 className="mb-10 text-center text-3xl font-bold md:text-4xl">Create an account</h1>
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
                  name="email"
                  placeholder="Email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  errormessage={formik.errors.email}
                  condition={formik.touched.email && formik.errors.email}
                />
                <WhiteTextInputBox
                  name="password"
                  placeholder="Password"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  errormessage={formik.errors.password}
                  condition={formik.touched.password && formik.errors.password}
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
                    className="!bg-primary-400 !w-[65%] !p-3 md:!p-4.5 text-md md:text-xl"
                  ></Button>
                </div>
              </form>
              <h1 className="mt-3 text-center text-sm">
                Already have an account?{" "}
                <span className="text-primary-400 cursor-pointer font-bold">Login</span>
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signuppage;
