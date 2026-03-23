// import { Component, signal } from '@angular/core';

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.html',
//   standalone: false,
//   styleUrl: './app.scss'
// })
// export class App {
//   protected readonly title = signal('inventory-ui');
// }


import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.scss'
})
export class App {
  title = 'inventory-ui';
}