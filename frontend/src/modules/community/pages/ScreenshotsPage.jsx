import { AnimatedOutlet, Container, Divider, Pagination, Title } from "@modules/_shared/App";
import { getScreenshotData } from "../utils/mockScreenshotsData";
import useUrlFilters from "@modules/store/hooks/useUrlFilters";
import { Link } from "react-router-dom";
import { IconPlus } from "@tabler/icons-react";

const ScreenshotData = getScreenshotData();
export default function ScreenshotsPage() {
  const { filters, setFilter } = useUrlFilters({ page: 1 });
  const itemsPerPage = 6;

  const lastItem = Number(filters.page) * itemsPerPage;
  const firstItem = lastItem - itemsPerPage;
  const items = ScreenshotData.slice(firstItem, lastItem);

  return (
    <>
      <Container>
        <Title>Screenshots</Title>
        <Divider direction="center" className="mt-1 mb-4" />
        <div className="flex flex-wrap gap-5">
          {items.map(panel => (
            <Link
              to={`${panel.id}`}
              className="hover:border-accent border-secondary flex w-full cursor-pointer overflow-hidden rounded-2xl border-2 transition-all duration-200 sm:w-[calc(50%-10px)]"
              key={panel.title}
            >
              <img
                src={panel.imageSrc}
                alt={panel.title + " by " + panel.author}
                className="bg-background-50 h-48 object-cover sm:h-auto sm:max-h-90 sm:w-2/3"
              />
              <div className="bg-secondary flex w-full flex-col">
                <h2 className="m-2 flex h-full items-center justify-center text-center text-2xl font-semibold sm:h-auto">
                  {panel.title}
                </h2>
                <p className="m-4 mt-0 hidden sm:block">{panel.description}</p>
                <p className="text-accent-200 m-2 ml-auto hidden h-full content-end sm:block">
                  {"by " + panel.author}
                </p>
              </div>
            </Link>
          ))}
        </div>
        <Link
          to="add"
          className="bg-accent hover:bg-accent-200 fixed right-10 bottom-10 rounded-2xl duration-100 ease-in"
        >
          <IconPlus size={50} />
        </Link>
        <Pagination
          totalItems={ScreenshotData.length}
          itemsPerPage={itemsPerPage}
          onPageChange={page => setFilter("page", page)}
          currentPage={Number(filters.page)}
          maxVisiblePages={5}
        />
      </Container>
      <AnimatedOutlet />
    </>
  );
}
