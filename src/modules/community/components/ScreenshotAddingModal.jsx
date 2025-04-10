import { PageModal, TextInput } from "@modules/_shared/App";
import { IconX } from "@tabler/icons-react";
import { useNavigate } from "react-router";

export default function ScreenshotAddingModal() {
  const navigate = useNavigate();
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
        <TextInput placeholder="Title Here" className="rounded-md" />

        <h2 className="mt-10">Image Source</h2>
        <TextInput placeholder="Add the source of your Image here" className="rounded-md" />

        <h2 className="mt-10">Description</h2>
        <TextInput
          placeholder="write a little something about your creation"
          className="rounded-md"
        />

        <h2 className="mt-10">Author</h2>
        <TextInput placeholder="Your Name here" className="rounded-md" />
        <button
          type="submit"
          className="bg-primary hover:bg-primary-400 m-5 mt-15 ml-auto w-min cursor-pointer rounded-xl p-2 duration-200"
        >
          Submit
        </button>
      </form>
    </PageModal>
  );
}
