import { BrowserRouter, Route, Routes } from "react-router";
import { NotFoundPage, RootLayout } from "@modules/_shared/App";
import { ProductPage, BrowsePage, HomePage, LibraryPage } from "@modules/store/App";
import { ArtworkPage, DiscoverPage, DiscussionPage, GuidesPage, NewsPage, ReviewsPage, ScreenshotsPage } from "@modules/community/App";


const routesLinks = [
  {
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />
      },
      {
        path: "/store/product",
        element: <ProductPage />
      },
      {
        path: "/store/browse",
        element: <BrowsePage />
      },
      {
        path: "/store/library",
        element: <LibraryPage />
      },
      {
        path: "/community",
        element: <DiscoverPage />
      },
      {
        path: "/community/artwork",
        element: <ArtworkPage />
      },
      {
        path: "/community/discussions",
        element: <DiscussionPage />
      },
      {
        path: "/community/guides",
        element: <GuidesPage />
      },
      {
        path: "/community/news",
        element: <NewsPage />
      },
      {
        path: "/community/reviews",
        element: <ReviewsPage />
      },
      {
        path: "/community/screenshots",
        element: <ScreenshotsPage />
      }
    ]
  },
  {
    element: <NotFoundPage />,
    path: "*"
  }
];

function getLinks(links, keyPrefix = "") {
  return links.map((link, idx) => {
    const key = `${keyPrefix}/${idx}`;

    if (link.children && link.path && link.element)
      return (
        <Route key={key} path={link.path} element={link.element}>
          {getLinks(link.children, key)}
        </Route>
      );

    if (link.children && link.path)
      return (
        <Route key={key} path={link.path}>
          {getLinks(link.children, key)}
        </Route>
      );

    if (link.children && link.element)
      return (
        <Route key={key} element={link.element}>
          {getLinks(link.children, key)}
        </Route>
      );

    return <Route key={key} path={link.path} element={link.element} />;
  });
}

export default function VVRoutes() {
  return (
    <BrowserRouter>
      <Routes>{getLinks(routesLinks)}</Routes>
    </BrowserRouter>
  );
}
