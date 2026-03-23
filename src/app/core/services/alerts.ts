// // import { Injectable } from '@angular/core';

// // @Injectable({
// //   providedIn: 'root',
// // })
// // export class Alerts {
  
// // }

// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';
// import { Alert } from '../models/alert';
// import { environment } from '../../../environments/environment';

// @Injectable({
//   providedIn: 'root'
// })
// export class AlertsService {

//   private apiUrl = `${environment.apiUrl}/alerts`;

//   constructor(private http: HttpClient) {}

//   getAllAlerts(): Observable<Alert[]> {
//     return this.http.get<Alert[]>(this.apiUrl);
//   }

//   dismissAlert(id: string): Observable<void> {
//     return this.http.delete<void>(`${this.apiUrl}/${id}`);
//   }
// }

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AlertsService {

  private apiUrl = `${environment.apiUrl}/inventory/alerts`;

  constructor(private http: HttpClient) {}

  getAllAlerts(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}
