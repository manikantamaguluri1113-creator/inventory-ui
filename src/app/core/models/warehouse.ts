export interface Warehouse {
  id: string;
  name: string;
  location: string;
  totalItems: number;
  lowStockCount: number;
  outOfStockCount: number;
}