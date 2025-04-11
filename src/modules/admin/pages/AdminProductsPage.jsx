import {
  Button,
  Container,
  Divider,
  PageModal,
  Pagination,
  Table,
  Title
} from "@modules/_shared/App";
import { getGamesList } from "@modules/store/utils/mockData";
import { IconCirclePlus } from "@tabler/icons-react";
import { AnimatePresence } from "motion/react";
import { useState } from "react";
import { Link } from "react-router";

const headers = [
  {
    key: "title",
    label: "Title"
  },
  {
    key: "type",
    label: "Type"
  }
];

const gameList = getGamesList();

export default function AdminProductsPage() {
  const [deleteDialogue, setDeleteDialogue] = useState({ open: false, game: null });
  const actions = [
    {
      label: "Edit"
    },
    {
      label: "Delete",
      className: "bg-red-700",
      onClick: game => setDeleteDialogue({ open: true, game })
    }
  ];
  return (
    <Container>
      <div className="flex items-center">
        <Title>Products</Title>
        <Link to="create" className="ml-auto">
          <Button leftSection={<IconCirclePlus size={22} />}>Add Product</Button>
        </Link>
      </div>
      <Table tableClassName="mt-6" headers={headers} data={gameList} actions={actions} />
      <Pagination totalItems={gameList.length} itemsPerPage={4} currentPage={1} />
      <ConfirmationDialogue
        isOpen={deleteDialogue.open}
        onCancel={() => setDeleteDialogue({ open: false })}
        onConfirm={() => setDeleteDialogue({ open: false })}
        game={deleteDialogue.game}
      />
    </Container>
  );
}

function ConfirmationDialogue({ isOpen, onConfirm, onCancel, game }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <PageModal>
          <div className="bg-background-900 border-accent w-full gap-2 rounded-lg border px-8 pt-4 pb-5">
            <h2 className="text-2xl font-bold">Confirm Deletion</h2>
            <Divider className="mb-2" direction="left" />
            <p className="text-lg">
              Are you sure you want to delete <span className="font-bold">{game.title}</span>
            </p>
            <div className="mt-6 flex justify-end gap-2">
              <button
                className="bg-primary hover:bg-primary-500 cursor-pointer rounded-md px-4 py-2"
                onClick={onConfirm}
              >
                Yes
              </button>
              <button
                className="bg-secondary hover:bg-secondary-500 cursor-pointer rounded-md px-4 py-2"
                onClick={onCancel}
              >
                No
              </button>
            </div>
          </div>
        </PageModal>
      )}
    </AnimatePresence>
  );
}
