import { BrowserRouter, Route, Routes } from "react-router";
import { NotFoundPage, RootLayout } from "@modules/_shared/App";
import { BrowsePage, HomePage } from "@modules/store/App";

const routesLinks = [
  {
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />
      },
      {
        path: "/store/browse",
        element: <BrowsePage />
      }
    ]
  },
  {
    element: <NotFoundPage />,
    path: "*"
  }
];

function getLinks(links) {
  return links.map(link => {
    if (link.children) {
      return <Route element={link.element}>{getLinks(link.children)}</Route>;
    }
    return <Route path={link.path} element={link.element} />;
  });
}

export default function VVRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        {getLinks(routesLinks)}
      </Routes>
    </BrowserRouter>
  );
}