export interface Stock {
  id: string;
  productId: string;
  productName: string;
  warehouseId: string;
  warehouseName: string;
  quantity: number;
  reorderThreshold: number;
  status: 'NORMAL' | 'LOW' | 'OUT_OF_STOCK';
  lastUpdated: string;
}

export interface StockDelta {
  productId: string;
  warehouseId: string;
  quantity: number;
  status: 'NORMAL' | 'LOW' | 'OUT_OF_STOCK';
  timestamp: string;
}