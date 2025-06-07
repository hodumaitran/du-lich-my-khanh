import { MinusIcon, PlusIcon, ShoppingBasket } from "lucide-react";
import { useState } from "react";

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
  quantity?: number;
}
export const ProductCard = (props: ProductCardProps) => {
  const [quantity, setQuantity] = useState(1);

  const decrease = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const increase = () => {
    setQuantity(quantity + 1);
  };
  return (
    <div>
      <div className="flex h-full justify-between gap-2 items-start min-[450px]:block bg-white rounded-md shadow-md p-4 hover:shadow-lg transition-shadow duration-300">
        <div className="w-1/3 min-[450px]:w-full flex justify-center items-center aspect-square">
          <img
            src={props.imageUrl}
            alt={props.name}
            className="object-cover w-full h-full"
          />
        </div>

        <div className="flex-1 flex flex-col min-[450px]:block justify-between h-full min-[450px]:h-auto">
          <h3 className="my-0 min-[450px]:my-2 text-lg font-semibold line-clamp-1">
            {props.name}
          </h3>

          <h4 className="mb-0  min-[450px]:mb-3 text-base min-[450px]:text-md font-medium text-red-500">
            {props.price.toLocaleString()} VNĐ
          </h4>

          <div className="flex justify-between items-center gap-2  min-[450px]:gap-4">
            <div className="flex flex-1 justify-between items-center">
              <button
                onClick={decrease}
                className="size-[25px] min-[450px]:size-[34px] py-1 border-2 border-gray-300 rounded-md text-lg flex items-center justify-center"
              >
                <MinusIcon size={16} />
              </button>
              <input
                type="number"
                min="1"
                value={quantity}
                onChange={(e) =>
                  setQuantity(Math.max(1, parseInt(e.target.value) || 1))
                }
                className="w-[20px] min-[450px]:w-[40px] h-full text-center appearance-none no-spinner"
              />
              <button
                onClick={increase}
                className="size-[25px] min-[450px]:size-[34px] bg-primary rounded-md text-lg border-2 border-primary flex items-center justify-center"
              >
                <PlusIcon size={16} className="text-white" />
              </button>
            </div>
            <button className="size-[25px] min-[450px]:size-[32px] bg-white rounded-md text-lg border-2 border-primary flex items-center justify-center">
              <ShoppingBasket size={16} className="text-primary" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
