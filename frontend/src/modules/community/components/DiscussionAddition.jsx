import { PageModal, TextInput } from "@modules/_shared/App";
import { useNavigate } from "react-router";
import { IconX } from "@tabler/icons-react";
import { useFormik } from "formik";
import * as Yup from "yup";

export default function DiscussionAddition() {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      title: "",
      body: "",
      image: "",
      username: ""
    },
    validationSchema: Yup.object({
      title: Yup.string().required("Title is required"),
      body: Yup.string().required("Body is required"),
      image: Yup.string().url("Invalid URL").required("Image URL is required"),
      username: Yup.string().required("Username is required")
    })
  });

  return (
    <PageModal>
      <form
        onSubmit={formik.handleSubmit}
        className="bg-secondary-800 grid columns-1 rounded-2xl p-5 px-15"
      >
        <button
          onClick={() => navigate("/community/discussions")}
          className="bg-primary hover:bg-primary-400 ml-auto cursor-pointer rounded-full p-1 duration-200"
        >
          <IconX size={30} />
        </button>
        <h2 className="mt-10">Discussion Title</h2>
        <TextInput
          name="title"
          value={formik.values.title}
          onChange={formik.handleChange}
          errormessage={formik.errors.title}
          condition={formik.touched.title && formik.errors.title}
          placeholder="Add Title"
          className="rounded-md"
        />

        <h2 className="mt-10">Body</h2>
        <TextInput
          name="body"
          value={formik.values.body}
          onChange={formik.handleChange}
          errormessage={formik.errors.body}
          condition={formik.touched.body && formik.errors.body}
          placeholder="Add Body"
          className="rounded-md"
        />

        <h2 className="mt-10">Image</h2>
        <TextInput
          name="image"
          value={formik.values.image}
          onChange={formik.handleChange}
          errormessage={formik.errors.image}
          condition={formik.touched.image && formik.errors.image}
          placeholder="Add Image Link"
          className="rounded-md"
        />

        <h2 className="mt-10">User Name</h2>
        <TextInput
          name="username"
          value={formik.values.username}
          onChange={formik.handleChange}
          errormessage={formik.errors.username}
          condition={formik.touched.username && formik.errors.username}
          placeholder="Add UserName"
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
