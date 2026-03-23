import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Dashboard } from './features/dashboard/dashboard/dashboard';
import { Stock } from './features/stock/stock/stock';
import { Warehouse } from './features/warehouse/warehouse/warehouse';
import { Alerts } from './features/alerts/alerts/alerts';
import { Login } from './features/login/login';
import { AuthGuard } from './core/auth/auth-guard';
import { Sidebar } from './shared/sidebar/sidebar';

// const routes: Routes = [
//   { path: '', redirectTo: 'login', pathMatch: 'full' },
//   { path: 'login', component: Login },
//   { path: 'dashboard', component: Dashboard, canActivate: [AuthGuard] },
//   { path: 'stock', component: Stock, canActivate: [AuthGuard] },
//   { path: 'warehouse', component: Warehouse, canActivate: [AuthGuard] },
//   { path: 'alerts', component: Alerts, canActivate: [AuthGuard] },
//   { path: '**', redirectTo: 'login' }
// ];

const routes: Routes = [

  // ❌ Login (no sidebar)
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: Login },

  // ✅ Pages WITH sidebar
  {
    path: '',
    component: Sidebar,   // 👈 use sidebar as layout
    children: [
      { path: 'dashboard', component: Dashboard, canActivate: [AuthGuard] },
      { path: 'stock', component: Stock, canActivate: [AuthGuard] },
      { path: 'warehouse', component: Warehouse, canActivate: [AuthGuard] },
      { path: 'alerts', component: Alerts, canActivate: [AuthGuard] }
    ]
  },

  { path: '', redirectTo: 'login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }