// import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';

// import { AppRoutingModule } from './app-routing-module';
// import { App } from './app';
// import { Dashboard } from './features/dashboard/dashboard/dashboard';
// import { Stock } from './features/stock/stock/stock';
// import { Warehouse } from './features/warehouse/warehouse/warehouse';
// import { Alerts } from './features/alerts/alerts/alerts';
// import { Sidebar } from './shared/sidebar/sidebar';

// @NgModule({
//   declarations: [
//     App,
//     Dashboard,
//     Stock,
//     Warehouse,
//     Alerts,
//     Sidebar
//   ],
//   imports: [
//     BrowserModule,
//     AppRoutingModule
//   ],
//   providers: [
//     provideBrowserGlobalErrorListeners(),
//   ],
//   bootstrap: [App]
// })
// export class AppModule { }


import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Dashboard } from './features/dashboard/dashboard/dashboard';
import { Stock } from './features/stock/stock/stock';
import { Warehouse } from './features/warehouse/warehouse/warehouse';
import { Alerts } from './features/alerts/alerts/alerts';
import { Sidebar } from './shared/sidebar/sidebar';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { AdjustStockDialog } from './shared/adjust-stock-dialog/adjust-stock-dialog';
import { Login } from './features/login/login';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtInterceptor } from './core/auth/jwt-interceptor';
import { WebSocketService } from './core/services/websocket';

@NgModule({
  declarations: [
    App,
    Dashboard,
    Stock,
    Warehouse,
    Alerts,
    Sidebar,
    AdjustStockDialog,
    Login
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    RouterModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    HttpClientModule,
    MatDialogModule,
    MatSelectModule,
    FormsModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    WebSocketService
  ],
  bootstrap: [App]
})
export class AppModule { }