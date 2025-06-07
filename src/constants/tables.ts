import type { Area } from "@/types";

export const dummyAreas: Area[] = [
  {
    id: "area-a",
    name: "Khu A",
    tables: Array.from({ length: 15 }, (_, i) => {
      const num = (i + 1).toString().padStart(2, "0");
      const statuses: ("available" | "serving" | "reserved")[] = [
        "available",
        "serving",
        "reserved",
      ];
      return {
        id: `A${num}`,
        name: `A${num}`,
        status: statuses[Math.floor(Math.random() * 3)],
      };
    }),
  },
  {
    id: "area-b",
    name: "Khu B",
    tables: Array.from({ length: 20 }, (_, i) => {
      const num = (i + 1).toString().padStart(2, "0");
      const statuses: ("available" | "serving" | "reserved")[] = [
        "available",
        "serving",
        "reserved",
      ];
      return {
        id: `B${num}`,
        name: `B${num}`,
        status: statuses[Math.floor(Math.random() * 3)],
      };
    }),
  },
  {
    id: "area-c",
    name: "Khu C",
    tables: Array.from({ length: 12 }, (_, i) => {
      const num = (i + 1).toString().padStart(2, "0");
      const statuses: ("available" | "serving" | "reserved")[] = [
        "available",
        "serving",
        "reserved",
      ];
      return {
        id: `C${num}`,
        name: `C${num}`,
        status: statuses[Math.floor(Math.random() * 3)],
      };
    }),
  },
  {
    id: "area-d",
    name: "Khu D",
    tables: Array.from({ length: 26 }, (_, i) => {
      const num = (i + 1).toString().padStart(2, "0");
      const statuses: ("available" | "serving" | "reserved")[] = [
        "available",
        "serving",
        "reserved",
      ];
      return {
        id: `D${num}`,
        name: `D${num}`,
        status: statuses[Math.floor(Math.random() * 3)],
      };
    }),
  },
];

export const statusColor: Record<string, string> = {
  available: "bg-primary",
  serving: "bg-gray-300",
  reserved: "bg-orange-300",
};
