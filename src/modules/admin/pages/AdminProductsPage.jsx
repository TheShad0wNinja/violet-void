import { Container, PageModal, Pagination, Table, Title } from "@modules/_shared/App";
import { getGamesList } from "@modules/store/utils/mockData";
import { AnimatePresence } from "motion/react";

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
  const actions = [
    {
      label: "Edit"
    },
    {
      label: "Delete",
      className: "bg-red-700"
    }
  ];
  return (
    <Container>
      <Title>Products</Title>
      <Table tableClassName="mt-6" headers={headers} data={gameList} actions={actions} />
      <Pagination totalItems={gameList.length} itemsPerPage={4} currentPage={1} />
      <ConfirmationDialogue isOpen={false} />
    </Container>
  );
}

function ConfirmationDialogue({ isOpen, onConfirm, onCancel }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <PageModal>
          <div className="bg-secondary-800 w-full gap-2">
            <button onClick={onConfirm}>Yes</button>
            <button onClick={onCancel}>No</button>
          </div>
        </PageModal>
      )}
    </AnimatePresence>
  );
}
