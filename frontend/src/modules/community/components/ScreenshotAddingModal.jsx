import { PageModal, TextInput } from "@modules/_shared/App";
import { IconX } from "@tabler/icons-react";
import { useNavigate } from "react-router";
import { useFormik } from "formik";
import * as Yup from "yup";

export default function ScreenshotAddingModal() {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      title: "",
      description: "",
      image: "",
      username: ""
    },
    validationSchema: Yup.object({
      title: Yup.string().required("Title is required"),
      description: Yup.string().required("Description is required"),
      image: Yup.string().url("Invalid URL").required("Image URL is required"),
      username: Yup.string().required("Username is required")
    })
  });

  return (
    <PageModal>
      <div className="flex flex-nowrap">
        <form className="bg-secondary-800 m-15 grid min-w-1/2 columns-1 rounded-2xl p-5">
          <div className="flex flex-nowrap">
            <h2 className="text-4xl font-semibold text-accent-200">Add a new Screenshot</h2>
            <button
              type="button"
              onClick={() => navigate("/community/screenshots")}
              className="bg-primary hover:bg-primary-400 ml-auto cursor-pointer rounded-full p-1 duration-200"
            >
              <IconX size={30} />
            </button>
          </div>
          <h2 className="mt-10">Title</h2>
          <TextInput
            name="title"
            value={formik.values.title}
            onChange={formik.handleChange}
            errormessage={formik.errors.title}
            condition={formik.touched.title && formik.errors.title}
            placeholder="Title Here"
            className="rounded-md"
          />

          <h2 className="mt-10">Image Source</h2>
          <TextInput
            name="image"
            value={formik.values.image}
            onChange={formik.handleChange}
            errormessage={formik.errors.image}
            condition={formik.touched.image && formik.errors.image}
            placeholder="Add the source of your Image here"
            className="rounded-md"
          />

          <h2 className="mt-10">Description</h2>
          <TextInput
            name="description"
            value={formik.values.description}
            onChange={formik.handleChange}
            errormessage={formik.errors.description}
            condition={formik.touched.description && formik.errors.description}
            placeholder="write a little something about your creation"
            className="rounded-md"
          />

          <h2 className="mt-10">Author</h2>
          <TextInput
            name="username"
            value={formik.values.username}
            onChange={formik.handleChange}
            errormessage={formik.errors.username}
            condition={formik.touched.username && formik.errors.username}
            placeholder="Your Name here"
            className="rounded-md"
          />
          <button
            onClick={formik.handleSubmit}
            className="bg-primary hover:bg-primary-400 m-5 mt-15 ml-auto w-min cursor-pointer rounded-xl p-2 duration-200"
          >
            Submit
          </button>
        </form>
        {!formik.dirty ? (
          <div className="hover:border-accent bg-secondary border-secondary m-auto flex w-min cursor-pointer overflow-hidden rounded-2xl border-2 p-24 font-semibold transition-all duration-200">
            <h1 className="mx-auto text-5xl">Preview</h1>
          </div>
        ) : (
          <div className="hover:border-accent bg-secondary border-secondary m-auto flex w-full max-w-1/3 cursor-pointer overflow-hidden rounded-2xl border-2 transition-all duration-200 sm:w-[calc(50%-10px)]">
            <img
              src={formik.values.image}
              className="bg-background-50 my-auto h-48 object-cover sm:h-auto sm:max-h-90 sm:w-2/3"
            />
            <div className="bg-secondary flex w-full flex-col">
              <h2 className="m-2 flex h-full items-center justify-center text-center text-2xl font-semibold sm:h-auto">
                {formik.values.title}
              </h2>
              <p className="m-4 mt-0 hidden sm:block">{formik.values.description}</p>
              <p className="text-accent-200 m-2 ml-auto hidden h-full content-end sm:block">
                {"by " + formik.values.username}
              </p>
            </div>
          </div>
        )}
      </div>
    </PageModal>
  );
}
