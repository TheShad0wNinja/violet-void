import {
  AnimatedOutlet,
  Container,
  Divider,
  Pagination,
  TextInput,
  Title
} from "@modules/_shared/App";
import { MoreButton, PostCard } from "../App";
import { getDiscussions } from "../utils/disscusionData";
import { Link, useLocation } from "react-router-dom";
import { IconSearch, IconPlus } from "@tabler/icons-react";
import { useEffect, useState } from "react";
import axios from "axios";
import useUrlFilters from "@modules/store/hooks/useUrlFilters";

const ITEM_LIMIT = 2;
const DISCOVER_ITEM_LIMIT = 2;

export default function DiscussionPage({ isDiscoverPage }) {
  const [discussions, setDiscussion] = useState([]);
  const [count, setCount] = useState();
  const location = useLocation();
  const { filters, setFilter } = useUrlFilters({ page: 1 });

  useEffect(() => {
    if (location.pathname.includes("/discussions/"))
      return;

    axios
      .get(
        `${import.meta.env.VITE_BACKEND_URL}/discussions${isDiscoverPage ? `?limit=${DISCOVER_ITEM_LIMIT}` : `?limit=${ITEM_LIMIT}&page=${filters.page}`}`
      )
      .then(res => {
        setDiscussion(res.data.discussions);
        setCount(res.data.totalCount);
      })
      .catch(e => console.log(e));
  }, [filters.page, location.pathname]);

  if (isDiscoverPage)
    return (
      <Container>
        <MoreButton to="discussions" className="my-6 ml-auto" />

        {discussions.map(post => (
          <PostCard key={post.id} post={post} isDiscoverPage={isDiscoverPage} />
        ))}
      </Container>
    );

  return (
    <>
      <Container>
        <div className={`bg-background ${isDiscoverPage ? "spcky" : ""} top-0 z-10`}>
          <div className="p-6">
            <div className="mb-4 flex items-center justify-between">
              {isDiscoverPage ? (
                <Link to="discussions">
                  <Title>Discussions</Title>
                </Link>
              ) : (
                <Title>Discussions</Title>
              )}

              <TextInput
                placeholder="Search discussions..."
                rightSection={<IconSearch size={22} />}
              />
            </div>

            <Divider className="mb-4" />
          </div>
        </div>

        {discussions.map(post => (
          <PostCard key={post.id} post={post} />
        ))}

        <Link
          to="add"
          className="bg-accent hover:bg-accent-200 fixed right-10 bottom-10 rounded-2xl duration-100 ease-in"
        >
          <IconPlus size={50} />
        </Link>
        <Pagination
          totalItems={count}
          itemsPerPage={ITEM_LIMIT}
          onPageChange={page => setFilter("page", page)}
          currentPage={Number(filters.page)}
        />
      </Container>
      <AnimatedOutlet />
    </>
  );
}
