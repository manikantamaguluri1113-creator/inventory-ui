// // import { Component } from '@angular/core';

// // @Component({
// //   selector: 'app-alerts',
// //   standalone: false,
// //   templateUrl: './alerts.html',
// //   styleUrl: './alerts.scss',
// // })
// // export class Alerts {

// // }

// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-alerts',
//   standalone: false,
//   templateUrl: './alerts.html',
//   styleUrl: './alerts.scss'
// })
// export class Alerts {

//   alerts = [
//     { product: 'Monitor', warehouse: 'Hyderabad Hub', quantity: 7, type: 'LOW', icon: 'warning', time: '10 mins ago' },
//     { product: 'Keyboard', warehouse: 'Pune DC', quantity: 0, type: 'OUT_OF_STOCK', icon: 'error', time: '25 mins ago' },
//     { product: 'Headphones', warehouse: 'Mumbai WH', quantity: 5, type: 'LOW', icon: 'warning', time: '1 hour ago' },
//     { product: 'Webcam', warehouse: 'Delhi Hub', quantity: 0, type: 'OUT_OF_STOCK', icon: 'error', time: '2 hours ago' },
//     { product: 'USB Hub', warehouse: 'Chennai Store', quantity: 3, type: 'LOW', icon: 'warning', time: '3 hours ago' }
//   ];
// }

import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { AlertsService } from '../../../core/services/alerts';

@Component({
  selector: 'app-alerts',
  standalone: false,
  templateUrl: './alerts.html',
  styleUrl: './alerts.scss'
})
export class Alerts implements OnInit {

  alerts: any[] = [];

  constructor(
    private alertsService: AlertsService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.loadAlerts();
  }

  loadAlerts() {
    this.alertsService.getAllAlerts().subscribe({
      next: (data) => {
        this.alerts = data;
        this.cdr.detectChanges();
      },
      error: (err) => console.error('Error loading alerts', err)
    });
  }
}