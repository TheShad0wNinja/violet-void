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
import { AdminHomePage, AdminProductsPage, AdminLayout } from "@modules/admin/App";

const adminRoutes = [
  {
    path: "products",
    element: <AdminProductsPage />
  },
  {
    path: "",
    element: <AdminHomePage />
  }
];

const routesLinks = [
  {
    element: (
      <CartProvider>
        <RootLayout />
      </CartProvider>
    ),
    children: [
      {
        path: "/",
        element: <HomePage />
      },
      {
        path: "store",
        children: [
          {
            path: "product/:id",
            element: <ProductPage />
          },
          {
            path: "browse",
            element: <BrowsePage />
          },
          {
            path: "wishlist",
            element: <WishlistPage />
          },
          {
            path: "library",
            element: <LibraryPage />
          }
        ]
      },
      {
        path: "/cart",
        element: <CartPage />
      },
      {
        path: "/cart/checkout",
        element: <CheckoutPage />
      }
    ]
  },
  {
    element: <AdminLayout />,
    path: "admin",
    children: adminRoutes
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
