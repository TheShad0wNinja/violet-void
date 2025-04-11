import { AnimatedOutlet, Container, Divider, TextInput, Title } from "@modules/_shared/App";
import { MoreButton, PostCard } from "../App";
import { getDiscussions } from "../utils/disscusionData";
import { Link } from "react-router-dom";
import { IconSearch, IconPlus } from "@tabler/icons-react";

export default function DiscussionPage({ isDiscoverPage }) {
  if (isDiscoverPage)
    return (
      <Container>
        <MoreButton to="discussions" className="my-6 ml-auto" />

        {getDiscussions().map(post => (
          <PostCard key={post.id} post={post} isDiscoverPage={isDiscoverPage} />
        ))}
      </Container>
    );

  return (
    <>
      <Container>
        <div className={`bg-background ${isDiscoverPage ? "sticky" : ""} top-0 z-10`}>
          <div className="p-6">
            <div className="mb-4 flex items-center justify-between">
              {isDiscoverPage ? (
                <Link to="discussions">
                  <Title>Discussions</Title>
                </Link>
              ) : (
                <Title>Discussions</Title>
              )}

							<TextInput placeholder="Search discussions..." rightSection={<IconSearch size={22} />} />
            </div>

            <Divider className="mb-4" />
          </div>
        </div>

        {getDiscussions().map(post => (
          <PostCard key={post.id} post={post} />
        ))}

        <Link
          to="add"
          className="bg-accent hover:bg-accent-200 fixed right-10 bottom-10 rounded-2xl duration-100 ease-in"
        >
          <IconPlus size={50} />
        </Link>
      </Container>
      <AnimatedOutlet />
    </>
  );
}
