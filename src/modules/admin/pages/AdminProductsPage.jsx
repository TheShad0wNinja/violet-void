import { Container, Table, Title } from "@modules/_shared/App";
import { getGamesList } from "@modules/store/utils/mockData";

export default function AdminProductsPage() {
  return (
    <Container>
			<Title>Products</Title>
      <Table
				tableClassName="mt-6"
        headers={[
          {
            key: "title",
            label: "Title"
          },
          {
            key: "type",
            label: "Type"
          }
        ]}
				data={getGamesList()}
				actions={[
					{
						label: 'Edit'
					},
					{
						label: 'Delete',
						className: 'bg-red-700'
					},
				]}
      />
    </Container>
  );
}
