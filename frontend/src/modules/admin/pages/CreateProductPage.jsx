import { Button, Container, Select, TextInput, Title } from "@modules/_shared/App";
import { useFormik } from "formik";
import * as yup from "yup";

export default function CreateProductPage() {
  const formik = useFormik({
    initialValues: {
      title: "",
      type: "",
      price: 0.0,
      coverImage: "",
      bannerImage: "",
      publisher: "",
      developer: ""
    },
    validationSchema: yup.object().shape({
      title: yup.string().required("The title is required"),
      type: yup.string().required("The type of product is required"),
      price: yup.number().min(0, "Number has to be positive").required("Price is required"),
      coverImage: yup
        .string()
        .url("Cover image has to be a url")
        .required("Cover image is required"),
      bannerImage: yup.string().url("Banner image has to be a url").default(""),
      publisher: yup.string().default("Unkown"),
      developer: yup.string().default("Unkown")
    }),
    onSubmit: values => {
      console.log("Form submitted: ", values);
    }
  });
  return (
    <Container>
      <Title withDivider>Create a new Product</Title>
      <form onSubmit={formik.handleSubmit} className="grid grid-cols-2 gap-2">
        <TextInput
          label="Title"
          value={formik.values.title}
          onChange={formik.handleChange}
          name="title"
          placeholder="Enter title"
          className="col-span-2"
        />
        <p className="col-span-2 text-red-500">{formik.errors.title}</p>
        <label className="bg-secondary relative block w-full rounded-md px-4 pb-2">
          <span className="absolute top-2 text-xs text-gray-200">Type</span>
          <select
            name="type"
            value={formik.values.type}
            onChange={formik.handleChange}
            className="mt-6 w-full text-gray-400 focus:outline-none"
          >
            <option value="base_game" label="Base Game" />
            <option value="dlc" label="DLC" />
            <option value="add_on" label="Add-On" />
            <option value="expansion" label="Expansion Pack" />
          </select>
        </label>
        <TextInput
          label="Price"
          value={formik.values.price}
          onChange={formik.handleChange}
          name="price"
          placeholder="Enter price"
        />
        <p className="col-span-2 text-red-500">{formik.errors.type}</p>
        <p className="col-span-2 text-red-500">{formik.errors.price}</p>

        <TextInput
          label="Cover Image Url"
          value={formik.values.coverImage}
          onChange={formik.handleChange}
          name="coverImage"
          placeholder="Enter the image url"
          className="col-span-2"
        />
        <p className="col-span-2 text-red-500">{formik.errors.coverImage}</p>

        <TextInput
          label="Cover Banner Url"
          value={formik.values.bannerImage}
          onChange={formik.handleChange}
          name="bannerImage"
          placeholder="Enter the image url"
          className="col-span-2"
        />
        <p className="col-span-2 text-red-500">{formik.errors.bannerImage}</p>

        <TextInput
          label="Publisher"
          value={formik.values.publisher}
          onChange={formik.handleChange}
          name="publisher"
          placeholder="Enter the publisher"
          className="col-span-1"
        />

        <TextInput
          label="Developer"
          value={formik.values.developer}
          onChange={formik.handleChange}
          name="developer"
          placeholder="Enter the developer"
          className="col-span-1"
        />
        <p className="col-span-2 text-red-500">{formik.errors.publisher}</p>
        <p className="col-span-2 text-red-500">{formik.errors.developer}</p>

        <Button className="col-span-2" type="submit">
          Create
        </Button>
      </form>
    </Container>
  );
}
