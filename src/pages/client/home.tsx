import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import {
    ArrowRightLeft,
    Calculator,
    Clock,
    Ellipsis,
    ListChecks,
    User,
    X,
} from "lucide-react";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function HomePage() {
    const [searchTerm, setSearchTerm] = useState("");
    const [activeTab, setActiveTab] = useState("all");
    
    const orders = [
        {
            id: "1",
            name: "A01",
            price: 100000,
            time: 100,
            person: 6,
            staff: "Nguyễn Văn A",
            area: "A",
        },
        {
            id: "2",
            name: "A02",
            price: 200000,
            time: 120,
            person: 4,
            staff: "Trần Thị B",
            area: "A",
        },
        {
            id: "3",
            name: "B01",
            price: 150000,
            time: 90,
            person: 2,
            staff: "Lê Văn C",
            area: "B",
        },
        {
            id: "4",
            name: "C01",
            price: 300000,
            time: 150,
            person: 8,
            staff: "Phạm Thị D",
            area: "C",
        },
        {
            id: "5",
            name: "B02",
            price: 250000,
            time: 110,
            person: 5,
            staff: "Nguyễn Văn E",
            area: "B",
        },
    ];

    const filteredOrders = orders.filter(order => 
        order.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const getOrdersToDisplay = () => {
        if (searchTerm) {
            return filteredOrders;
        }
        
        switch (activeTab) {
            case "a":
                return orders.filter(order => order.area === "A");
            case "b":
                return orders.filter(order => order.area === "B");
            case "c":
                return orders.filter(order => order.area === "C");
            default:
                return orders;
        }
    };

    const renderOrderList = (areaOrders: typeof orders) => {
        if (areaOrders.length === 0) {
            return (
                <div className="flex items-center justify-center flex-col mt-4">
                    <div className="">
                        <img src="/no-order.jpg" alt="" width={200} />
                    </div>
                    <p>Không có order</p>
                </div>
            );
        }
        
        return (
            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4">
                {areaOrders.map((order) => (
                    <div
                        key={order.id}
                        className="flex flex-col rounded-sm overflow-hidden shadow-sm">
                        <Link to={"/"}>
                            <div className="bg-primary text-white flex items-center justify-between p-2">
                                <div>{order.staff}</div>
                                <div className="flex items-center gap-1">
                                    <User size={16} />
                                    <span>{order.person}</span>
                                </div>
                            </div>
                            <div className="grid grid-cols-2">
                                <div className="bg-blue-100 flex flex-col justify-center items-center">
                                    <div className="font-bold text-4xl text-blue-500">
                                        {order.name}
                                    </div>
                                    <div>Order {order.id}</div>
                                </div>
                                <div className="">
                                    <div className="p-2 lg:text-xl border-b font-medium border-gray-200 text-end">
                                        {order.price.toLocaleString(
                                            "vi-VN",
                                        )}
                                    </div>
                                    <div className="p-2 flex items-center justify-end gap-1">
                                        <Clock size={16} />
                                        {order.time}'
                                    </div>
                                </div>
                            </div>
                        </Link>
                        <div className="grid grid-cols-4 bg-gray-100">
                            <Button variant={"ghost"}>
                                <img
                                    src="/icons/food-tray.svg"
                                    alt=""
                                    width={24}
                                />
                            </Button>
                            <Button variant={"ghost"}>
                                <ListChecks />
                            </Button>
                            <Button variant={"ghost"}>
                                <Calculator />
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
                ))}
            </div>
        );
    };

    const renderTabs = () => {
        return (
            <div className="flex flex-col space-y-2">
                <div 
                    className={`p-3 rounded-md cursor-pointer ${activeTab === "all" ? "bg-primary text-white" : "bg-gray-100 hover:bg-gray-200"}`}
                    onClick={() => setActiveTab("all")}
                >
                    <span className="font-medium">Tất cả</span>
                </div>
                <div 
                    className={`p-3 rounded-md cursor-pointer ${activeTab === "a" ? "bg-primary text-white" : "bg-gray-100 hover:bg-gray-200"}`}
                    onClick={() => setActiveTab("a")}
                >
                    <span className="font-medium">Khu A</span>
                </div>
                <div 
                    className={`p-3 rounded-md cursor-pointer ${activeTab === "b" ? "bg-primary text-white" : "bg-gray-100 hover:bg-gray-200"}`}
                    onClick={() => setActiveTab("b")}
                >
                    <span className="font-medium">Khu B</span>
                </div>
                <div 
                    className={`p-3 rounded-md cursor-pointer ${activeTab === "c" ? "bg-primary text-white" : "bg-gray-100 hover:bg-gray-200"}`}
                    onClick={() => setActiveTab("c")}
                >
                    <span className="font-medium">Khu C</span>
                </div>
            </div>
        );
    };

    const renderMobileTabs = () => {
        return (
            <div className="grid grid-cols-4 gap-1 mb-4">
                <div 
                    className={`p-2 text-center rounded-md cursor-pointer ${activeTab === "all" ? "bg-primary text-white" : "bg-gray-100"}`}
                    onClick={() => setActiveTab("all")}
                >
                    <span className="text-sm font-medium">Tất cả</span>
                </div>
                <div 
                    className={`p-2 text-center rounded-md cursor-pointer ${activeTab === "a" ? "bg-primary text-white" : "bg-gray-100"}`}
                    onClick={() => setActiveTab("a")}
                >
                    <span className="text-sm font-medium">Khu A</span>
                </div>
                <div 
                    className={`p-2 text-center rounded-md cursor-pointer ${activeTab === "b" ? "bg-primary text-white" : "bg-gray-100"}`}
                    onClick={() => setActiveTab("b")}
                >
                    <span className="text-sm font-medium">Khu B</span>
                </div>
                <div 
                    className={`p-2 text-center rounded-md cursor-pointer ${activeTab === "c" ? "bg-primary text-white" : "bg-gray-100"}`}
                    onClick={() => setActiveTab("c")}
                >
                    <span className="text-sm font-medium">Khu C</span>
                </div>
            </div>
        );
    };

    return (
        <div className="p-2 lg:p-4">
            {/* Desktop Layout */}
            <div className="hidden lg:flex lg:gap-6">
                <div className="w-[20%]">
                    {renderTabs()}
                </div>
                <div className="w-[80%]">
                    <Input 
                        placeholder="Tìm theo số bàn..." 
                        className="w-full" 
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    {renderOrderList(getOrdersToDisplay())}
                </div>
            </div>

            {/* Mobile Layout */}
            <div className="lg:hidden">
                <Input 
                    placeholder="Tìm theo số bàn..." 
                    className="w-full mb-4" 
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                {!searchTerm && renderMobileTabs()}
                {renderOrderList(getOrdersToDisplay())}
            </div>
        </div>
    );
}
