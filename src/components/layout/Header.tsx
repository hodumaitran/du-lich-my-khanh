import { NavLink } from "react-router-dom";
import { Button } from "../ui/button";

const Header = () => {
  return (
    <header className="hidden md:block py-2 bg-white shadow fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <h1>
          <NavLink to="/">
            <img src="/My_Khanh_Logo.png" alt="" className="size-14" />
          </NavLink>
        </h1>
        <ul className="flex items-center gap-6 font-medium">
          <li>
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                isActive ? "text-primary" : "text-gray-600"
              }
            >
              Trang chủ
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/so-do"
              className={({ isActive }) =>
                isActive ? "text-primary" : "text-gray-600"
              }
            >
              Sơ đồ
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/san-pham"
              className={({ isActive }) =>
                isActive ? "text-primary" : "text-gray-600"
              }
            >
              Gọi món
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/tam-tinh"
              className={({ isActive }) =>
                isActive ? "text-primary" : "text-gray-600"
              }
            >
              Tạm tính
            </NavLink>
          </li>
        </ul>
        <div>
          <Button>Đăng nhập</Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
