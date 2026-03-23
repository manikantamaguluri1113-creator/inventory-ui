export interface Alert {
  id: string;
  product: string;
  warehouse: string;
  quantity: number;
  type: 'LOW' | 'OUT_OF_STOCK';
  icon: string;
  time: string;
}