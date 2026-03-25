import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { Subscription } from 'rxjs';
import { StockService } from '../../../core/services/stock';
import { WebSocketService } from '../../../core/services/websocket';
import { Stock } from '../../../core/models/stock';

@Component({
  selector: 'app-dashboard',
  standalone: false,
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss'
})
export class Dashboard implements OnInit, OnDestroy {

  displayedColumns = ['product', 'warehouse', 'quantity', 'status'];
  stockData: Stock[] = [];
  totalProducts = 0;
  lowStockCount = 0;
  outOfStockCount = 0;
  private wsSubscription!: Subscription;

  constructor(
    private stockService: StockService,
    private wsService: WebSocketService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.loadStock();
    this.connectWebSocket();
  }

  loadStock() {
    this.stockService.getAllStock().subscribe({
      next: (data) => {
        this.stockData = data;
        this.updateCounts(data);
        this.cdr.detectChanges();
      },
      error: (err) => console.error('Error loading stock', err)
    });
  }

  connectWebSocket() {
    this.wsService.connect();
    this.wsSubscription = this.wsService.subscribeToStock().subscribe({
      next: (delta) => {
        const idx = this.stockData.findIndex(
          s => s.productId === delta.productId &&
               s.warehouseId === delta.warehouseId
        );
        if (idx !== -1) {
          this.stockData[idx] = { ...this.stockData[idx], ...delta };
          this.stockData = [...this.stockData];
          this.updateCounts(this.stockData);
          this.cdr.detectChanges();
        }
      }
    });
  }

  updateCounts(data: Stock[]) {
    this.totalProducts = data.length;
    this.lowStockCount = data.filter(s => s.status === 'LOW').length;
    this.outOfStockCount = data.filter(s => s.status === 'OUT_OF_STOCK').length;
  }

  ngOnDestroy() {
    this.wsSubscription?.unsubscribe();
    this.wsService.disconnect();
  }
}