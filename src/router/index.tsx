import { ClientLayout } from "@/components/layout/MainLayout";
import TablesPage from "@/pages/client/tables";
import Temporary from "@/pages/client/temporary";
import type { RouteObject } from "react-router-dom";
import { CartPage } from "../pages/client/cart";
import HomePage from "../pages/client/home";
import { OrderPage } from "../pages/client/order";
import ProductPage from "../pages/client/product";

export const routes: RouteObject[] = [
  {
    path: "/",
    element: <ClientLayout />,
    children: [
      { path: "", element: <HomePage /> },
      { path: "san-pham", element: <ProductPage /> },
      { path: "tam-tinh", element: <Temporary /> },
      { path: "so-do", element: <TablesPage /> },
      { path: "goi-mon", element: <OrderPage /> },
      { path: "gio-hang", element: <CartPage /> },
    ],
  },
];
