import { BrowserRouter, Route, Routes } from "react-router";
import { NotFoundPage, RootLayout } from "@modules/_shared/App";
import { HomePage } from "@modules/store/App";

export default function VVRoutes() {
    return (
      <BrowserRouter>
        <Routes>
          <Route element={<RootLayout />}>
            <Route path="/" element={<HomePage />} />
          </Route>
          {NotFoundRoute}
        </Routes>
      </BrowserRouter>
    );
}

const NotFoundRoute = <Route path="*" element={<NotFoundPage />} />;