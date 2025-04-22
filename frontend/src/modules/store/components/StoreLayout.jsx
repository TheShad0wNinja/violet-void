import { Container } from "@modules/_shared/App";
import { IconShoppingCart } from "@tabler/icons-react";
import { Link, Outlet, useLocation } from "react-router";

export default function StoreLayout() {
  const location = useLocation();
  const isCartPage = ["/store/cart", "/store/cart/checkout"].includes(location.pathname);

  if (isCartPage) return <Outlet />;

  return (
    <>
      <Container className="mb-6">
        <div className="grid grid-cols-1 justify-end">
          <Link to="/store/cart">
            <button className="bg-primary ml-auto flex cursor-pointer flex-nowrap gap-1 rounded-md px-4 py-2">
              <IconShoppingCart size={22} />
              Open Cart
            </button>
          </Link>
        </div>
      </Container>
      <Outlet />
    </>
  );
}
