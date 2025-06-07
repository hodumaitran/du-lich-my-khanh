import { CircleDollarSign, Home, Sheet, User, Utensils } from "lucide-react";
import { NavLink } from "react-router-dom";

const tabs = [
  { href: "", label: "Trang chủ", icon: <Home size={20} /> },
  { href: "so-do", label: "Sơ đồ", icon: <Sheet size={20} /> },
  { href: "san-pham", label: "Gọi món", icon: <Utensils size={20} /> },
  { href: "tam-tinh", label: "Tạm tính", icon: <CircleDollarSign size={20} /> },
  { href: "", label: "Tài khoản", icon: <User size={20} /> },
];
export const MobileTabs = () => {
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-white shadow-2xl flex justify-around items-center md:hidden py-4">
      {tabs.map((tab) => (
        <NavLink
          key={tab.href}
          to={tab.href}
          end
          className={({ isActive }) =>
            `flex flex-col items-center justify-center text-sm ${
              isActive ? "text-primary" : "text-gray-500"
            }`
          }
        >
          {tab.icon}
          <span className="text-xs mt-1">{tab.label}</span>
        </NavLink>
      ))}
    </nav>
  );
};
