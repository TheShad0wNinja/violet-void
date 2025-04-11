import WhiteTextInputBox from "@modules/authorization/components/WhiteTextInputBox";
import React, { useEffect, useRef, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

function EditProfile({ account, editProfileState }) {
  const fileInputRef = useRef(null);
  const [preview, setPreview] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = e => {
    const file = e.target.files[0];
    if (file) {
      setSelectedFile(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  const formik = useFormik({
    initialValues: {
      username: account.name || "",
      email: account.email || "",
      password: "",
      confirmpassword: ""
    },
    validationSchema: Yup.object({
      username: Yup.string(),
      email: Yup.string().email("Invalid email"),
      password: Yup.string().min(6, "Password must be at least 6 characters"),
      confirmpassword: Yup.string()
        .when("password", (password, schema) => {
          return password
            ? schema.notRequired()
            : schema
                .required("Please confirm your password")
                .oneOf([Yup.ref("password")], "Passwords must match");
        })
        .when("password", {
          is: password => password && password.length > 0,
          then: schema => schema.required("Confirm Password is required")
        })
    }),
    validateOnBlur: true,
    validateOnChange: true,
    onSubmit: async values => {
      try {
        console.log("Form submitted:", values);
        // Your submission logic here
      } catch (error) {
        console.error("Error updating profile:", error);
      }
    }
  });

  return (
    <>
      <div
        className="fixed inset-0 z-10 bg-black/50"
        onClick={() => editProfileState(prev => !prev)}
      ></div>

      <div className="fixed inset-0 z-50 flex items-center justify-center">
        <div
          className="bg-secondary-900 flex w-1/2 flex-row items-center justify-between gap-5 rounded-2xl p-5 pt-10 pb-14 shadow-md shadow-gray-950"
          onClick={e => e.stopPropagation()}
        >
          <div className="w-[40%] pl-10">
            <form onSubmit={formik.handleSubmit}>
              <h1 className="mb-6 text-4xl">Edit Profile</h1>

              <WhiteTextInputBox
                name="username"
                placeholder="Username"
                value={formik.values.username}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                errormessage={formik.errors.username}
                condition={formik.touched.username && formik.errors.username}
              />

              <WhiteTextInputBox
                name="email"
                placeholder="Email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                errormessage={formik.errors.email}
                condition={formik.touched.email && formik.errors.email}
              />

              <WhiteTextInputBox
                name="password"
                placeholder="New Password "
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                errormessage={formik.errors.password}
                condition={formik.touched.password && formik.errors.password}
                type="password"
              />

              {formik.values.password && (
                <WhiteTextInputBox
                  name="confirmpassword"
                  placeholder="Confirm New Password"
                  value={formik.values.confirmpassword}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  errormessage={formik.errors.confirmpassword}
                  condition={formik.touched.confirmpassword && formik.errors.confirmpassword}
                  type="password"
                />
              )}

              <div className="mt-8 flex gap-4">
                <button
                  type="submit"
                  disabled={
                    !formik.values.username &&
                    !formik.values.email &&
                    !formik.values.password &&
                    preview == null
                  }
                  className={`hover:bg-secondary-600 bg-secondary h-fit w-fit rounded-md px-4 py-2 text-center ${
                    !formik.values.username &&
                    !formik.values.email &&
                    !formik.values.password &&
                    preview == null
                      ? "cursor-not-allowed opacity-50"
                      : "cursor-pointer"
                  }`}
                >
                  Save
                </button>

                <button
                  type="button"
                  onClick={() => editProfileState(prev => !prev)}
                  className="hover:bg-secondary-600 bg-secondary h-fit w-fit cursor-pointer rounded-md px-4 py-2 text-center"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>

          <div className="mr-14 h-fit w-[30%]">
            <div className="mb-4 h-[250px] w-full">
              <img
                src={preview || account.avatar}
                alt="Profile avatar"
                className="h-full w-full rounded-2xl object-cover"
              />
            </div>

            <input
              type="file"
              ref={fileInputRef}
              onChange={handleFileChange}
              accept="image/*"
              className="hidden"
            />

            <div className="flex justify-end">
              <button
                onClick={handleButtonClick}
                type="button"
                className="hover:bg-secondary-600 bg-secondary h-fit w-fit cursor-pointer rounded-md px-4 py-2 text-center"
              >
                Change Picture
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default EditProfile;
