import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Dashboard } from './features/dashboard/dashboard/dashboard';
import { Stock } from './features/stock/stock/stock';
import { Warehouse } from './features/warehouse/warehouse/warehouse';
import { Alerts } from './features/alerts/alerts/alerts';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: Dashboard },
  { path: 'stock', component: Stock },
  { path: 'warehouse', component: Warehouse },
  { path: 'alerts', component: Alerts },
  { path: '**', redirectTo: 'dashboard' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }