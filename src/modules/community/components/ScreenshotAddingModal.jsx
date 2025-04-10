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
      <form className="bg-secondary-800 grid columns-1 rounded-2xl p-5 px-15">
        <button
          onClick={() => navigate("/community/screenshots")}
          className="bg-primary hover:bg-primary-400 ml-auto cursor-pointer rounded-full p-1 duration-200"
        >
          <IconX size={30} />
        </button>
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
    </PageModal>
  );
}
