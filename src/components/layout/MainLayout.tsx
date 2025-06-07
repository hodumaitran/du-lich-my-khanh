import { Outlet } from "react-router-dom";
import Header from "./Header";
import { MobileTabs } from "./MobileTabs";

export const ClientLayout = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Header />
      <div className="text-primary pb-20 md:pt-[100px]">
        <Outlet />
      </div>
      <MobileTabs />
    </div>
  );
};
