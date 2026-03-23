// // import { Injectable } from '@angular/core';

// // @Injectable({
// //   providedIn: 'root',
// // })
// // export class Warehouse {
  
// // }

// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';
// import { Warehouse } from '../models/warehouse';
// import { environment } from '../../../environments/environment';

// @Injectable({
//   providedIn: 'root'
// })
// export class WarehouseService {

//   private apiUrl = `${environment.apiUrl}/inventory/warehouses`;

//   constructor(private http: HttpClient) {}

//   getAllWarehouses(): Observable<Warehouse[]> {
//     return this.http.get<Warehouse[]>(this.apiUrl);
//   }

//   getWarehouseById(id: string): Observable<Warehouse> {
//     return this.http.get<Warehouse>(`${this.apiUrl}/${id}`);
//   }
// }

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WarehouseService {

  private apiUrl = `${environment.apiUrl}/inventory`;

  constructor(private http: HttpClient) {}

  getAllWarehouses(): Observable<string[]> {
    return this.http.get<string[]>(`${this.apiUrl}/warehouses`);
  }

  getStockByWarehouse(warehouseId: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/warehouses/${warehouseId}/stock`);
  }
}