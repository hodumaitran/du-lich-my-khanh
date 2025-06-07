import { Check, CircleMinus, CirclePlus, PlusSquareIcon } from "lucide-react";
import { useState } from "react";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { CartCard } from "../../components/ui/order/OrderCard";
import { cartItems as initialCartItems } from "../../constants/oderData";
import { Link } from "react-router-dom";

export const CartPage = () => {
  const [quantify, setQuantify] = useState(1);
  const [selected, setSelected] = useState("Debit");
  const [cartItems, setCartItems] = useState(initialCartItems);

  const plus = () => {
    setQuantify(quantify + 1);
  };
  const minus = () => {
    if (quantify > 1) {
      setQuantify(quantify - 1);
    }
  };

  const handleChangeQuantity = (id: string, quantity: number) => {
    setCartItems((items) =>
      items.map((item) => (item.id === id ? { ...item, quantity } : item))
    );
  };

  const handleRemove = (id: string) => {
    setCartItems((items) => items.filter((item) => item.id !== id));
  };
  const paymentMethods = [
    { name: "Camera", icon: "📷" },
    { name: "Tiền mặt", icon: "💵" },
    { name: "Thẻ ghi nợ", icon: "💳" },
    { name: "e-Money", icon: "💰" },
  ];

  return (
    <div className="container mx-auto">
      <h2 className="flex justify-between items-centertext-xl font-semibold mb-3 bg-primary text-white py-2 px-3">
        Thông tin đặt món
        <span className="font-medium text-sm p-1 bg-primary rounded-md text-white">
          bàn 2.3
        </span>
      </h2>

      <div className="w-full flex flex-col md:flex-row gap-6 bg-white rounded-md shadow-md py-2 px-3">
        <div className="w-full hidden md:block">
          <h3 className="font-medium mb-2">Khu vực</h3>
          <p className="py-2 px-3 bg-gray-100 rounded-md">Nguyễn Thị Hến</p>
        </div>
        <div className="w-full">
          <h3 className="font-medium mb-2">Số lượng khách hàng</h3>
          <div className="flex flex-row justify-between items-center gap-3 bg-gray-100 py-2 px-3 rounded-md">
            <p>{quantify} khách hàng</p>
            <div className="flex justify-center items-center">
              <CircleMinus onClick={minus} size={20} />
              <input
                type="number"
                name="customerCount"
                id="customerCount"
                min={1}
                step={1}
                inputMode="numeric"
                value={quantify}
                onChange={(e) =>
                  setQuantify(Math.max(1, parseInt(e.target.value) || 1))
                }
                className="w-[30px]  min-[450px]:w-[45px] h-full text-center appearance-none no-spinner"
              />
              <CirclePlus onClick={plus} size={20} className="text-primary" />
            </div>
          </div>
        </div>
      </div>

      <div className="my-5 w-full flex justify-between items-center">
        <h2 className="text-xl font-semibold">Thêm món mới</h2>
        <Link to="/san-pham">
          <PlusSquareIcon size={30} className="text-primary" />
        </Link>
      </div>
      <div className="mb-5">
        <h2 className="text-xl font-semibold my-3">Món đã gọi</h2>
        <div className="grid grid-cols-1 min-[620px]:grid-cols-2 lg:grid-cols-3 gap-3 justify-between items-center">
          {cartItems.map((item) => (
            <CartCard
              key={item.id}
              {...item}
              onChangeQuantity={handleChangeQuantity}
              onRemove={handleRemove}
            />
          ))}
        </div>
      </div>

      <Card className="w-full">
        <CardContent className="p-6 space-y-6">
          <div>
            <h2 className="text-2xl font-semibold">Thanh toán đơn hàng</h2>
            <div className="mt-4 space-y-2 text-lg text-gray-700">
              <div className="flex justify-between">
                <span>Tạm tính</span>
                <span>1.000.000 VNĐ</span>
              </div>
              <div className="flex justify-between text-red-500">
                <span>Giảm giá</span>
                <span>120.000 VNĐ</span>
              </div>
            </div>
            <div className="mt-4 flex justify-between text-lg font-bold text-green-600">
              <span>Tổng tiền</span>
              <span>880.000 VNĐ</span>
            </div>
          </div>

          <div>
            <h2 className="text-lg font-semibold">Payment Method</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
              {paymentMethods.map((method) => (
                <button
                  key={method.name}
                  onClick={() => setSelected(method.name)}
                  className={`border rounded-xl p-4 flex flex-col items-center justify-center gap-2 transition-colors duration-200 relative ${
                    selected === method.name
                      ? "bg-primary !text-white border-primary"
                      : "bg-white text-primary border-gray-300"
                  }`}
                >
                  <span className="text-2xl">{method.icon}</span>
                  <span>{method.name}</span>
                  {selected === method.name && (
                    <Check className="absolute top-1 right-1 w-4 h-4" />
                  )}
                </button>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Button className="text-lg py-6 rounded-full border border-primary bg-white text-primary hover:bg-gray-900">
              Gửi bếp
            </Button>
            <Button className="text-lg py-6 rounded-full bg-primary text-white hover:bg-gray-900">
              Thanh toán
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
export default CartPage;
