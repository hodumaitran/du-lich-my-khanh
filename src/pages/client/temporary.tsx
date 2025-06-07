import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  Card,
  CardAction,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import BillModal from "@/components/ui/temporary/Bill";
import { SlashIcon, UserRound } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

interface OrderItem {
  id: number;
  name: string;
  quantity: number;
  unitPrice: number;
  totalPrice: number;
}

interface TableOrder {
  id: number;
  tableNumber: string;
  orderCode: string;
  total: number;
  people: number;
  date: string; // YYYY-MM-DD
  timeRange: string; // ví dụ: "08:29 - 08:29"
  cashier: string;
  items: OrderItem[];
}
const mockData: TableOrder[] = [
  {
    id: 1,
    tableNumber: "B01",
    orderCode: "A123",
    total: 450000,
    people: 4,
    date: "2025-06-05",
    timeRange: "08:15 - 08:30",
    cashier: "Thu Ngân Khu A",
    items: [
      {
        id: 1,
        name: "Cà phê đá",
        quantity: 2,
        unitPrice: 17000,
        totalPrice: 34000,
      },
      {
        id: 2,
        name: "Rau má đậu xanh",
        quantity: 1,
        unitPrice: 20000,
        totalPrice: 20000,
      },
      {
        id: 3,
        name: "Phở bò",
        quantity: 2,
        unitPrice: 38000,
        totalPrice: 76000,
      },
      {
        id: 4,
        name: "Trà đào",
        quantity: 2,
        unitPrice: 15000,
        totalPrice: 30000,
      },
    ],
  },
  {
    id: 2,
    tableNumber: "B02",
    orderCode: "A124",
    total: 275000,
    people: 2,
    date: "2025-06-05",
    timeRange: "09:00 - 09:20",
    cashier: "Thu Ngân Khu B",
    items: [
      {
        id: 1,
        name: "Bánh mì trứng",
        quantity: 2,
        unitPrice: 20000,
        totalPrice: 40000,
      },
      {
        id: 2,
        name: "Trà sữa",
        quantity: 2,
        unitPrice: 25000,
        totalPrice: 50000,
      },
      {
        id: 3,
        name: "Bún bò",
        quantity: 1,
        unitPrice: 45000,
        totalPrice: 45000,
      },
    ],
  },
  // Các bản ghi còn lại có thể copy theo mẫu trên
];

const Temporary = () => {
  const [selectState, setSelectState] = useState<"table" | "order">("table");
  const [openModal, setOpenModal] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState(mockData);
  const [selectedTable, setSelectedTable] = useState<TableOrder | null>(null);
  const handleSearch = (key: "table" | "order", value: string) => {
    setSearchTerm(value);
    const results = mockData.filter((item) =>
      key === "order"
        ? item.orderCode.toLowerCase().includes(value.toLowerCase())
        : item.tableNumber.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredData(results);
  };
  const handleOpenModal = (data: TableOrder) => {
    setOpenModal(true);
    setSelectedTable(data);
  };
  return (
    <div className="container mx-auto">
      <div className="py-3">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link to="/">Trang chủ</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator>
              <SlashIcon />
            </BreadcrumbSeparator>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link to="/client/tam-tinh">Hoá đơn tạm tính</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      <div className="flex bg-[#fafafafa] rounded-2xl p-4 gap-5 mb-6 ">
        <Select
          value={selectState}
          onValueChange={(value) => setSelectState(value as "table" | "order")}
        >
          <SelectTrigger className="w-[180px] ">
            <SelectValue placeholder="Tìm bàn" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="table">Tìm bàn</SelectItem>
            <SelectItem value="order">Tìm order</SelectItem>
          </SelectContent>
        </Select>

        <Input
          value={searchTerm}
          onChange={(e) => handleSearch(selectState, e.target.value)}
          placeholder={
            selectState === "table" ? "Nhập số bàn..." : "Nhập mã order..."
          }
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 bg-[#fafafafa] p-4 rounded-2xl mb-10">
        {filteredData.map((item) => (
          <Card
            key={item.id}
            className="gap-0 p-0 overflow-hidden cursor-pointer rounded-sm transition-all duration-300 transform hover:shadow-md hover:border hover:border-primary"
            onClick={() => handleOpenModal(item)}
          >
            <CardHeader className="bg-primary p-2">
              <CardTitle className="text-white">{item.orderCode}</CardTitle>
              <CardAction className="flex gap-1 justify-center items-center text-white">
                <UserRound size={18} />
                <div className="font-medium">{item.people}</div>
              </CardAction>
            </CardHeader>
            <CardContent className="grid grid-cols-2 p-0">
              <div className="bg-blue-100 text-center p-5 font-medium">
                {item.tableNumber}
              </div>
              <div className="bg-white text-center p-5 font-medium ">
                {item.total.toLocaleString("vi-VN")}₫
              </div>
            </CardContent>
          </Card>
        ))}

        {filteredData.length === 0 && (
          <div className="col-span-full text-center text-gray-500">
            Không tìm thấy kết quả.
          </div>
        )}
      </div>
      <BillModal open={openModal} setopen={setOpenModal} data={selectedTable} />
    </div>
  );
};

export default Temporary;
