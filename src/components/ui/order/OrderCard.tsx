import { useState } from "react";
import {
  CircleMinus,
  CirclePlus,
  ClipboardPenLine,
  Trash2,
} from "lucide-react";
import { Button } from "../button";

interface CartCardProps {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
  quantity: number;
  onChangeQuantity?: (id: string, quantity: number) => void;
  onRemove?: (id: string) => void;
}

export const CartCard = ({
  id,
  name,
  price,
  imageUrl,
  quantity: initialQuantity,
  onChangeQuantity,
  onRemove,
}: CartCardProps) => {
  const [quantity, setQuantity] = useState(initialQuantity);
  const [isEditingNote, setIsEditingNote] = useState(false);
  const [note, setNote] = useState("");

  const minus = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
      onChangeQuantity?.(id, quantity - 1);
    }
  };
  const plus = () => {
    setQuantity(quantity + 1);
    onChangeQuantity?.(id, quantity + 1);
  };

  return (
    <div className="bg-white rounded-md shadow-lg p-3">
      <div className="h-[130px] flex justify-between items-start gap-4 ">
        <div className="w-1/3 h-full flex justify-center items-center aspect-square">
          <img
            src={imageUrl}
            alt={name}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="h-full flex flex-1 justify-between items-start">
          <div className="space-y-2 h-full flex justify-between flex-col">
            <h3 className="text-xl font-semibold line-clamp-1">{name}</h3>
            <h4 className="text-lg font-semibold">
              {price.toLocaleString()} VNĐ
            </h4>
            <div className="flex justify-start items-start">
              <CircleMinus onClick={minus} size={24} />
              <input
                type="number"
                min={1}
                step={1}
                inputMode="numeric"
                value={quantity}
                onChange={(e) => {
                  const val = Math.max(1, parseInt(e.target.value) || 1);
                  setQuantity(val);
                  onChangeQuantity?.(id, val);
                }}
                className="w-[30px] min-[450px]:w-[45px] h-full text-center appearance-none no-spinner"
              />
              <CirclePlus onClick={plus} size={24} className="text-primary" />
            </div>
          </div>
          <div className="h-full flex flex-col justify-between items-center">
            <ClipboardPenLine
              size={20}
              onClick={() => setIsEditingNote(!isEditingNote)}
            />
            <Trash2
              className="text-red-500"
              size={20}
              onClick={() => onRemove?.(id)}
            />
          </div>
        </div>
      </div>
      {isEditingNote && (
        <>
          <input
            type="text"
            placeholder="Nhập ghi chú cho món ăn..."
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary mt-3"
            value={note}
            onChange={(e) => setNote(e.target.value)}
          />
          <div className="w-full flex justify-end">
            <Button className="mt-2" onClick={() => setIsEditingNote(false)}>
              Xác nhận
            </Button>
          </div>
        </>
      )}
    </div>
  );
};
