import { PageModal, TextInput } from "@modules/_shared/App";
import { useNavigate } from "react-router";
import { IconX } from "@tabler/icons-react";



export default function GuideAddition() {
const navigate = useNavigate();

  return (
    <PageModal>
      <form className="bg-secondary-800 grid columns-1 rounded-2xl p-5 px-15">
        <button
          onClick={() => navigate("/community/guides")}
          className="bg-primary hover:bg-primary-400 ml-auto cursor-pointer rounded-full p-1 duration-200"
        >
          <IconX size={30} />
        </button>
        <h2 className="mt-10">Discussion Title</h2>
        <TextInput placeholder="Add Title" className="rounded-md" />

        <h2 className="mt-10">Body</h2>
        <TextInput placeholder="Add Body" className="rounded-md" />

        <h2 className="mt-10">Image</h2>
        <TextInput placeholder="Add Image Link" className="rounded-md" />

        <h2 className="mt-10">User Name</h2>
        <TextInput placeholder="Add UserName" className="rounded-md" />

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