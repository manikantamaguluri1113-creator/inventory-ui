// import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
// import { WarehouseService } from '../../../core/services/warehouse';


// @Component({
//   selector: 'app-warehouse',
//   standalone: false,
//   templateUrl: './warehouse.html',
//   styleUrl: './warehouse.scss'
// })
// export class Warehouse implements OnInit {

//   constructor(private warehouseService: WarehouseService,
//               private cdr: ChangeDetectorRef
//   ) {}


//    ngOnInit() {
//     this.loadWarehouses();
//   }

//   loadWarehouses() {
//     this.warehouseService.getAllWarehouses().subscribe({
//       next: (data) => {
        
//         this.cdr.detectChanges();
//         console.log("warehouses", data);
//       },
//       error: (err) => {
//         console.error('Error loading stock', err);
//       }
//     });
//   }
//   warehouses = [
//     { name: 'Hyderabad Hub', location: 'Hyderabad', totalItems: 120, lowStockCount: 3, outOfStockCount: 1 },
//     { name: 'Pune DC', location: 'Pune', totalItems: 85, lowStockCount: 1, outOfStockCount: 2 },
//     { name: 'Mumbai WH', location: 'Mumbai', totalItems: 200, lowStockCount: 5, outOfStockCount: 0 },
//     { name: 'Chennai Store', location: 'Chennai', totalItems: 60, lowStockCount: 2, outOfStockCount: 1 },
//     { name: 'Delhi Hub', location: 'Delhi', totalItems: 150, lowStockCount: 4, outOfStockCount: 3 }
//   ];
// }

import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { WarehouseService } from '../../../core/services/warehouse';
import { StockService } from '../../../core/services/stock';

@Component({
  selector: 'app-warehouse',
  standalone: false,
  templateUrl: './warehouse.html',
  styleUrl: './warehouse.scss'
})
export class Warehouse implements OnInit {

  warehouses: any[] = [];

  constructor(
    private warehouseService: WarehouseService,
    private stockService: StockService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.loadWarehouses();
  }

  loadWarehouses() {
    this.warehouseService.getAllWarehouses().subscribe({
      next: (warehouseIds: string[]) => {
        this.warehouses = [];
        warehouseIds.forEach(id => {
          this.warehouseService.getStockByWarehouse(id).subscribe({
            next: (stock: any[]) => {
              const warehouse = {
                name: stock[0]?.warehouseName || id,
                location: stock[0]?.warehouseName || id,
                totalItems: stock.length,
                lowStockCount: stock.filter(s => s.status === 'LOW').length,
                outOfStockCount: stock.filter(s => s.status === 'OUT_OF_STOCK').length
              };
              this.warehouses.push(warehouse);
              this.cdr.detectChanges();
            }
          });
        });
      },
      error: (err) => console.error('Error loading warehouses', err)
    });
  }
}