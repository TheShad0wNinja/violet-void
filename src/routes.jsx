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
  LibraryPage,
  StoreLayout
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

import { AuthPage, AuthProvider } from "@modules/authorization/App";
import AccountPage from "@modules/store/pages/AccountPage";

const storeRoutes = [
  {
    path: "product/:id",
    element: <ProductPage />
  },
  {
    path: "",
    element: <BrowsePage />
  },
  {
    path: "cart",
    children: [
      {
        path: "",
        element: <CartPage />
      },
      {
        path: "checkout",
        element: <CheckoutPage />
      }
    ]
  }
];

const communityRoutes = [
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
];

const accountRoutes = [
  {
    path: ":account",
    element: <AccountPage />
  },
  {
    path: "wishlist",
    element: <WishlistPage />
  },
  {
    path: "library",
    element: <LibraryPage />
  }
];

const routesLinks = [
  {
    element: (
      <AuthProvider>
        <RootLayout />
      </AuthProvider>
    ),
    children: [
      {
        path: "",
        element: <HomePage />
      },
      {
        path: "store",
        element: (
          <CartProvider>
            <StoreLayout />
          </CartProvider>
        ),
        children: storeRoutes
      },
      {
        path: "community/:game?",
        children: communityRoutes
      },
      {
        path: "account",
        children: accountRoutes
      }
    ]
  },
  {
    path: "auth/:page",
    element: (
      <AuthProvider>
        <AuthPage />
      </AuthProvider>
    )
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
