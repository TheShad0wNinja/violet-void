import { AnimatedOutlet, Container, Divider, Pagination, Title } from "@modules/_shared/App";
import useUrlFilters from "@modules/store/hooks/useUrlFilters";
import { IconPlus } from "@tabler/icons-react";
import { Link, useLocation } from "react-router-dom";
import { getScreenshotData } from "../utils/mockScreenshotsData";
import { useEffect, useState } from "react";
import axios from "axios";

const ScreenshotData = getScreenshotData();
export default function ScreenshotsPage() {
  const itemsPerPage = 6;
  const { filters, setFilter } = useUrlFilters({ page: 1 });
  const [screenshot, setScreenshot] = useState([]);
  const [count, setCount] = useState();
  const location = useLocation();
  useEffect(() => {
    if (location.pathname.includes("/screenshots/")) return;
    axios
      .get(`${import.meta.env.VITE_API_URL}/screenshots?limit=${itemsPerPage}&page=${filters.page}`)
      .then(res => {
        setScreenshot(res.data.screenshots);
        setCount(res.data.totaCount);
      })
      .catch(e => console.log(e));
  }, [filters.page, location.pathname]);

  return (
    <>
      <Container>
        <Title>Screenshots</Title>
        <Divider direction="center" className="mt-1 mb-4" />
        <div className="flex flex-wrap gap-5">
          {screenshot.map(panel => (
            <Link
              to={`${panel.id}`}
              className="hover:border-accent bg-secondary border-secondary m-auto flex w-full cursor-pointer overflow-hidden rounded-2xl border-2 transition-all duration-200 sm:w-[calc(50%-10px)]"
              key={panel.id}
            >
              <img
                src={panel.imageSrc}
                alt={panel.title + " by " + panel.author}
                className="bg-background-50 my-auto h-48 object-cover sm:h-auto sm:max-h-90 sm:w-2/3"
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
          totalItems={count}
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
