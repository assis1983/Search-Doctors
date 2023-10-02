export type Variant =
  | "total"
  | "available"
  | "unavailable"
  | "totalcontracts"
  | "active"
  | "inactive";

export type ProductClientType = {
  id: number;
  nome: string;
  percentual: number;
};

export type ProductClientArray = ProductClientType[];
