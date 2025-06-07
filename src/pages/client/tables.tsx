import TableItem from "@/components/ui/TableItem";
import { dummyAreas } from "@/constants/tables";
import type { Area } from "@/types";
import { useState } from "react";

const TablesPage = () => {
  const [selectedArea, setSelectedArea] = useState<Area>(dummyAreas[0]);

  return (
    <div className="flex flex-col md:flex-row">
      {/* Sidebar khu vực */}
      <aside className="w-full md:w-60 border-b md:border-b-0 p-3 py-0 md:p-4 bg-primary md:bg-transparent">
        <ul className="flex md:block overflow-x-auto gap-2 md:space-y-2 hide-scrollbar">
          {dummyAreas.map((area) => (
            <li key={area.id} className="flex-shrink-0">
              <button
                onClick={() => setSelectedArea(area)}
                className={`w-full uppercase font-medium text-left px-3 py-2 md:rounded text-white ${
                  selectedArea.id === area.id
                    ? "border-b-2 border-white md:border-b-0 md:bg-primary md:text-white"
                    : "md:hover:bg-primary/10 md:text-primary"
                }`}
              >
                {area.name}{" "}
                <span className="hidden md:inline-block">
                  ({area.tables.length})
                </span>
              </button>
            </li>
          ))}
        </ul>
      </aside>

      {/* Main content */}
      <section className="flex-1 p-3 md:p-6 md:pt-3">
        {/* Chú thích */}
        <div className="flex items-center gap-2 md:gap-4 mb-6 text-sm md:text-base">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-primary rounded"></div>
            <span>Trống</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-gray-300 rounded"></div>
            <span>Đang phục vụ</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-orange-300 rounded"></div>
            <span>Đặt trước</span>
          </div>
        </div>

        {/* Danh sách bàn */}
        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-7 2xl:grid-cols-8 gap-5 md:gap-8">
          {selectedArea.tables.map((table) => (
            <TableItem key={table.id} table={table} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default TablesPage;
