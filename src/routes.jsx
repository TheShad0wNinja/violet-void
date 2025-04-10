import { BrowserRouter, Route, Routes } from "react-router";
import { NotFoundPage, RootLayout } from "@modules/_shared/App";
import {
  ProductPage,
  BrowsePage,
  HomePage,
  CartPage,
  CartProvider,
  CheckoutPage,
  WishlistPage,
  LibraryPage
} from "@modules/store/App";
import {
  ArtworkItemModal,
  ArtworkPage,
  DiscoverPage,
  DiscussionPage,
  GuidesPage,
  NewsPage,
  ReviewsPage,
  ScreenshotAddingModal,
  ScreenshotsPage,
  DiscussionAddition,
  GuideAddition,
  NewsPostPopUp,
  DiscussionPostPopUp,
  GuidePostPopUp
} from "@modules/community/App";

const routesLinks = [
  {
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />
      },
      {
        path: "/store/product/:id",
        element: <ProductPage />
      },
      {
        path: "/store/browse",
        element: <BrowsePage />
      },
      {
        path: "/cart",
        element: <CartPage />
      },
      {
        path: "/cart/checkout",
        element: <CheckoutPage />
      },
      {
        path: "/store/wishlist",
        element: <WishlistPage />
      },
      {
        path: "/store/library",
        element: <LibraryPage />
      },
      {
        path: "community",
        children: [
          {
            path: "",
            element: <DiscoverPage />
          },
          {
            path: "artwork/:artist?",
            element: <ArtworkPage />,
            children: [
              {
                path: ":id",
                element: <ArtworkItemModal />
              }
            ]
          },
          {
            path: "discussions",
            element: <DiscussionPage />,
            children: [
              {
                path: "add",
                element: <DiscussionAddition />
              },
							{
								path: ":id",
								element: <DiscussionPostPopUp />
							}
            ]
          },
          {
            path: "guides",
            element: <GuidesPage />,
            children: [
              {
                path: "add",
                element: <GuideAddition />
              },
							{
								path: ":id",
								element: <GuidePostPopUp />
							}
            ]
          },
          {
            path: "news",
            element: <NewsPage />,
            children: [
              {
                path: ":id",
                element: <NewsPostPopUp />
              }
            ]
          },
          {
            path: "reviews",
            element: <ReviewsPage />
          },
          {
            path: "screenshots",
            element: <ScreenshotsPage />,
            children: [
              {
                path: "add",
                element: <ScreenshotAddingModal />
              }
            ]
          }
        ]
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
