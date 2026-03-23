// // import { Component } from '@angular/core';

// // @Component({
// //   selector: 'app-dashboard',
// //   standalone: false,
// //   templateUrl: './dashboard.html',
// //   styleUrl: './dashboard.scss',
// // })
// // export class Dashboard {

// // }

// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-dashboard',
//   standalone: false,
//   templateUrl: './dashboard.html',
//   styleUrl: './dashboard.scss'
// })
// export class Dashboard {

//   displayedColumns = ['product', 'warehouse', 'quantity', 'status'];

//   stockData = [
//     { product: 'Laptop', warehouse: 'Hyderabad Hub', quantity: 45, status: 'NORMAL' },
//     { product: 'Monitor', warehouse: 'Hyderabad Hub', quantity: 7, status: 'LOW' },
//     { product: 'Keyboard', warehouse: 'Pune DC', quantity: 0, status: 'OUT_OF_STOCK' },
//     { product: 'Mouse', warehouse: 'Pune DC', quantity: 120, status: 'NORMAL' },
//     { product: 'Headphones', warehouse: 'Mumbai WH', quantity: 5, status: 'LOW' }
//   ];
// }

import { Component, OnInit, ChangeDetectorRef  } from '@angular/core';
import { StockService } from '../../../core/services/stock';
import { Stock } from '../../../core/models/stock';

@Component({
  selector: 'app-dashboard',
  standalone: false,
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss'
})
export class Dashboard implements OnInit {

  displayedColumns = ['product', 'warehouse', 'quantity', 'status'];

  stockData: Stock[] = [];

  totalProducts = 0;
  lowStockCount = 0;
  outOfStockCount = 0;

  constructor(private stockService: StockService,
              private cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.loadStock();
  }

  loadStock() {
    this.stockService.getAllStock().subscribe({
      next: (data) => {
        this.stockData = data;
        this.totalProducts = data.length;
        this.lowStockCount = data.filter(s => s.status === 'LOW').length;
        this.outOfStockCount = data.filter(s => s.status === 'OUT_OF_STOCK').length;
        this.cdr.detectChanges();
      },
      error: (err) => {
        console.error('Error loading stock', err);
      }
    });
  }
}