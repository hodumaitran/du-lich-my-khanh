export type TableStatus = "available" | "serving" | "reserved";

export interface Table {
  id: string;
  name: string;
  status: TableStatus;
  customers?: number;
}

export interface Area {
  id: string;
  name: string;
  tables: Table[];
}
