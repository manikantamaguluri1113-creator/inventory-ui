// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';
// import { Stock } from '../models/stock';
// import { environment } from '../../../environments/environment';

// @Injectable({
//   providedIn: 'root'
// })
// export class StockService {

//   private apiUrl = `${environment.apiUrl}/inventory/stock`;

//   constructor(private http: HttpClient) {}

//   getAllStock(): Observable<Stock[]> {
//     return this.http.get<Stock[]>(this.apiUrl);
//   }

//   getStockByWarehouse(warehouseId: string): Observable<Stock[]> {
//     return this.http.get<Stock[]>(`${this.apiUrl}?warehouseId=${warehouseId}`);
//   }

//   adjustStock(id: string, delta: number): Observable<Stock> {
//     return this.http.patch<Stock>(`${this.apiUrl}/${id}/adjust`, { delta });
//   }
// }

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Stock } from '../models/stock';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StockService {

  private apiUrl = `${environment.apiUrl}/inventory/stock`;

  constructor(private http: HttpClient) {}

  getAllStock(): Observable<Stock[]> {
    return this.http.get<Stock[]>(this.apiUrl);
  }

  getStockByWarehouse(warehouseId: string): Observable<Stock[]> {
    return this.http.get<Stock[]>(`${this.apiUrl}/warehouse/${warehouseId}`);
  }

  // adjustStock(productId: string, delta: number): Observable<Stock> {
  //   return this.http.patch<Stock>(`${this.apiUrl}/${productId}/adjust`, { delta });
  // }

  adjustStock(productId: string, delta: number, warehouseId: string): Observable<Stock> {
    return this.http.patch<Stock>(`${this.apiUrl}/${productId}/adjust`, { delta, warehouseId });
  }
}