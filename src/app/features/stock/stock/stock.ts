// import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
// import { StockService } from '../../../core/services/stock';
// import { Stock as StockItem } from '../../../core/models/stock';

// @Component({
//   selector: 'app-stock',
//   standalone: false,
//   templateUrl: './stock.html',
//   styleUrl: './stock.scss'
// })
// export class Stock implements OnInit {

//   displayedColumns = ['product', 'warehouse', 'quantity', 'threshold', 'status', 'actions'];
//   stockData: StockItem[] = [];

//   constructor(
//     private stockService: StockService,
//     private cdr: ChangeDetectorRef
//   ) {}

//   ngOnInit() {
//     this.loadStock();
//   }

//   loadStock() {
//     this.stockService.getAllStock().subscribe({
//       next: (data) => {
//         this.stockData = data;
//         this.cdr.detectChanges();
//       },
//       error: (err) => {
//         console.error('Error loading stock', err);
//       }
//     });
//   }
// }

import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { StockService } from '../../../core/services/stock';
import { Stock as StockItem } from '../../../core/models/stock';
import { AdjustStockDialog } from '../../../shared/adjust-stock-dialog/adjust-stock-dialog';

@Component({
  selector: 'app-stock',
  standalone: false,
  templateUrl: './stock.html',
  styleUrl: './stock.scss'
})
export class Stock implements OnInit {

  displayedColumns = ['product', 'warehouse', 'quantity', 'threshold', 'status', 'actions'];
  stockData: StockItem[] = [];
  searchText: string = '';
  originalData: any[] = [];

  constructor(
    private stockService: StockService,
    private dialog: MatDialog,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.loadStock();
  }

  loadStock() {
    this.stockService.getAllStock().subscribe({
      next: (data) => {
        this.stockData = data;
        this.originalData = data;
        this.cdr.detectChanges();
      },
      error: (err) => console.error('Error loading stock', err)
    });
  }

  openAdjustDialog(item: StockItem) {
    const dialogRef = this.dialog.open(AdjustStockDialog, {
      width: '400px',
      data: {
        product: item.productName,
        quantity: item.quantity,
        productId: item.productId,
        warehouseId: item.warehouseId
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        // this.stockService.adjustStock(result.productId, result.delta).subscribe({
        //   next: () => {
        //     this.loadStock();
        //   },
        //   error: (err) => console.error('Error adjusting stock', err)
        // });
        this.stockService.adjustStock(result.productId, result.delta, result.warehouseId).subscribe({
          next: () => {
            this.loadStock();
          },
          error: (err) => console.error('Error adjusting stock', err)
        });
      }
    });
  }

  applyFilter() {

  const search = this.searchText.toLowerCase();

  this.stockData = this.originalData.filter(item =>
    item.productName.toLowerCase().includes(search) ||
    item.warehouseName.toLowerCase().includes(search)
  );
}
}