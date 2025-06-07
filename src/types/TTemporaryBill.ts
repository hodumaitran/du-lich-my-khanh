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

export type { TableOrder };
