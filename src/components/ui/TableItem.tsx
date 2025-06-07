import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { statusColor } from "@/constants/tables";
import type { Table } from "@/types";
import {
  ArrowRightLeft,
  Calculator,
  Ellipsis,
  ListChecks,
  User,
  X,
} from "lucide-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "./button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./dropdown-menu";

const TableItem = ({ table }: { table: Table }) => {
  const navigate = useNavigate();
  const [openDialog, setOpenDialog] = useState(false);

  const handleClick = () => {
    if (table.status === "available") {
      navigate(`/san-pham?table=${table.id}`);
    } else if (table.status === "serving") {
      setOpenDialog(true);
    }
  };

  return (
    <>
      <div
        className="rounded-lg text-white font-semibold flex items-center justify-center cursor-pointer"
        onClick={handleClick}
      >
        <div className="relative p-3">
          {/* 6 viền bàn */}
          <div
            className={`absolute left-0 top-1/2 -translate-y-1/2 w-2 h-5 rounded-sm ${
              statusColor[table.status]
            }`}
          />
          <div
            className={`absolute right-0 top-1/2 -translate-y-1/2 w-2 h-5 rounded-sm ${
              statusColor[table.status]
            }`}
          />
          <div
            className={`absolute top-0 left-1/4 w-5 h-2 rounded-sm ${
              statusColor[table.status]
            }`}
          />
          <div
            className={`absolute top-0 right-1/4 w-5 h-2 rounded-sm ${
              statusColor[table.status]
            }`}
          />
          <div
            className={`absolute bottom-0 left-1/4 w-5 h-2 rounded-sm ${
              statusColor[table.status]
            }`}
          />
          <div
            className={`absolute bottom-0 right-1/4 w-5 h-2 rounded-sm ${
              statusColor[table.status]
            }`}
          />

          {/* Tên bàn */}
          <div
            className={`${
              statusColor[table.status]
            } flex items-center justify-center rounded md:rounded-md w-[60px] h-[40px] sm:w-[70px] sm:h-[50px] text-center`}
          >
            {table.name}
          </div>
        </div>
      </div>

      <Dialog open={openDialog} onOpenChange={setOpenDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Bàn đang phục vụ</DialogTitle>
          </DialogHeader>
          <div className="p-4">
            <div className="flex flex-col rounded-sm overflow-hidden">
              <Link to={"/"}>
                <div className="bg-primary text-white p-2">
                  <div className="flex items-center justify-between">
                    <p className="font-medium">Order: 2.3</p>
                    <div className="flex items-center gap-1">
                      <User size={16} />
                      <span>6</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <div>Đang phục vụ</div>
                    <span>39.00đ</span>
                  </div>
                </div>
              </Link>
              <div className="grid grid-cols-4 bg-gray-100 py-2">
                <Button variant={"ghost"}>
                  <img src="/icons/food-tray.svg" alt="" width={24} />
                </Button>
                <Button variant={"ghost"}>
                  <ListChecks size={20} />
                </Button>
                <Button variant={"ghost"}>
                  <Calculator size={20} />
                </Button>
                <DropdownMenu>
                  <DropdownMenuTrigger className="w-full flex items-center justify-center">
                    <Ellipsis />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuItem>
                      <ArrowRightLeft color="blue" />
                      Chuyển bàn
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <X color="red" />
                      Hủy order
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button
                variant="outline"
                className="cursor-pointer bg-white text-red-500 border-none outline-none hover:bg-white rounded hover:text-red-600"
              >
                Đóng
              </Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default TableItem;
