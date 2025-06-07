import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import type { TableOrder } from "@/types/TTemporaryBill";

type Props = {
  data: TableOrder | null;
  open: boolean;
  setopen: React.Dispatch<React.SetStateAction<boolean>>;
};

export const BillModal = ({ data, open, setopen }: Props) => {
  if (!data) return null;

  return (
    <AlertDialog open={open} onOpenChange={setopen}>
      <AlertDialogContent className="max-w-[350px]">
        <AlertDialogHeader>
          <AlertDialogTitle className="text-center text-lg font-bold">
            PHIẾU TẠM TÍNH
          </AlertDialogTitle>
        </AlertDialogHeader>

        {/* Nội dung hóa đơn */}
        <div className="text-sm">
          <p className="text-center font-semibold">
            Số HĐ: {data.orderCode || null}
          </p>

          <div className="mt-4 space-y-1">
            <p>
              <span className="font-medium">Số order:</span> {data.orderCode}
            </p>
            <p>
              <span className="font-medium">Ngày:</span> {data.date}
            </p>
            <p>
              <span className="font-medium">Bàn:</span> {data.tableNumber}
            </p>
            <p>
              <span className="font-medium">Thu ngân:</span> {data.cashier}
            </p>
          </div>

          <table className="w-full text-sm border border-gray-300 mt-4">
            <thead className="bg-gray-100">
              <tr>
                <th className="border px-2 py-1 text-left">Tên món</th>
                <th className="border px-2 py-1 text-center">SL</th>
                <th className="border px-2 py-1 text-right">ĐG</th>
                <th className="border px-2 py-1 text-right">Thành tiền</th>
              </tr>
            </thead>
            <tbody>
              {data.items?.map((item, index) => (
                <tr key={index}>
                  <td className="border px-2 py-1">
                    {index + 1}. {item.name}
                  </td>
                  <td className="border px-2 py-1 text-center">
                    {item.quantity}
                  </td>
                  <td className="border px-2 py-1 text-right">
                    {item.unitPrice.toLocaleString()}đ
                  </td>
                  <td className="border px-2 py-1 text-right">
                    {item.totalPrice.toLocaleString()}đ
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="text-sm mt-4 space-y-1">
            <p className="flex justify-between">
              <span>Tiền hàng:</span>
              <span>{data.total.toLocaleString()}đ</span>
            </p>
            <p className="flex justify-between font-semibold text-base">
              <span>Tổng thanh toán:</span>
              <span>{data.total.toLocaleString()}đ</span>
            </p>
            <p className="flex justify-between">
              <span>Còn phải thu:</span>
              <span>{data.total.toLocaleString()}đ</span>
            </p>
          </div>

          <p className="text-xs text-center mt-4 text-red-600 font-semibold">
            Vui lòng kiểm tra kỹ lại nội dung trước khi thanh toán!
          </p>
          <p className="text-xs text-center text-gray-500">
            (Hóa đơn chưa bao gồm thuế GTGT)
          </p>
        </div>

        <AlertDialogFooter>
          <AlertDialogCancel color="red">Đóng</AlertDialogCancel>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default BillModal;
