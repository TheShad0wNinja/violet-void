import { BrowserRouter, Route, Routes } from "react-router";
import { RootLayout } from "@modules/_shared/App";
import Home from "@modules/store/pages/HomePage";
import { HomePage } from "@modules/store/App";
export default function VVRoutes() {
    return ( <BrowserRouter>
      <Routes>
        <Route element={<RootLayout />} > 
          <Route path="/" element={<Home /> } />

        </Route>
        {TestRoute()}

      </Routes>
    </BrowserRouter>
    )
}

const TestRoute = () => (
    <Route path="/test" element={<HomePage />}>
    </Route>
);