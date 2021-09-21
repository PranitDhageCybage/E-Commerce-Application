import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { OrderHistoryComponent } from './order-history/order-history.component';
import { PreviewComponent } from './preview/preview.component';

const routes: Routes = [
  { path: 'preview', component: PreviewComponent, canActivate: [AuthService], },
  { path: 'order-history', component: OrderHistoryComponent, canActivate: [AuthService], },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrderRoutingModule {}
