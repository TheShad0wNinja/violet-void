import { BrowserRouter, Route, Routes } from "react-router";
import { NotFoundPage, RootLayout } from "@modules/_shared/App";
import { HomePage} from "@modules/store/App";
import ProductPage from "@modules/store/pages/ProductPage.jsx";
export default function VVRoutes() {
    return (
      <BrowserRouter>
        <Routes>
          <Route element={<RootLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/store/product" element={<ProductPage />} />

          </Route>
          {NotFoundRoute}
        </Routes>
      </BrowserRouter>
    );
}

const NotFoundRoute = <Route path="*" element={<NotFoundPage />} />;