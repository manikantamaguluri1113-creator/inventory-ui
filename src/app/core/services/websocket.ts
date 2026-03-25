import { Injectable } from '@angular/core';
import { RxStomp } from '@stomp/rx-stomp';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthService } from './auth';
import { environment } from '../../../environments/environment';
import SockJS from 'sockjs-client';

@Injectable({
  providedIn: 'root'
})
export class WebSocketService {

  private rxStomp: RxStomp = new RxStomp();

  constructor(private authService: AuthService) {}

  // connect() {
  //   this.rxStomp.configure({
  //     brokerURL: undefined,
  //     webSocketFactory: () => {
  //       return new SockJS(`${environment.apiUrl}/ws`);
  //     },
  //     connectHeaders: {
  //       Authorization: `Bearer ${this.authService.getToken() || ''}`
  //     },
  //     reconnectDelay: 3000
  //   });
  //   this.rxStomp.activate();
  // }

  connect() {
    this.rxStomp.configure({
      brokerURL: undefined,
      webSocketFactory: () => {
        return new SockJS(`${environment.apiUrl}/ws`);
      },
      connectHeaders: {
        Authorization: `Bearer ${this.authService.getToken() || ''}`
      },
      reconnectDelay: 3000,
      debug: (msg) => {
        console.log('STOMP Debug:', msg);
      }
    });

    this.rxStomp.connectionState$.subscribe(state => {
      console.log('WebSocket connection state:', state);
    });

    this.rxStomp.activate();
  }

  disconnect() {
    this.rxStomp.deactivate();
  }

  subscribeToStock(): Observable<any> {
    return this.rxStomp.watch('/topic/stock').pipe(
      map(msg => JSON.parse(msg.body))
    );
  }

  subscribeToWarehouse(warehouseId: string): Observable<any> {
    return this.rxStomp.watch(`/topic/stock/${warehouseId}`).pipe(
      map(msg => JSON.parse(msg.body))
    );
  }
}