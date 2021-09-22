import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrderRoutingModule } from './order-routing.module';
import { OrderHistoryComponent } from './order-history/order-history.component';
import { PreviewComponent } from './preview/preview.component';
import { HttpClientModule } from '@angular/common/http';
import { OrderService } from './order.service';

@NgModule({
  declarations: [OrderHistoryComponent, PreviewComponent],
  imports: [CommonModule, OrderRoutingModule, HttpClientModule, NgModule],
  providers: [OrderService],
})
export class OrderModule {}
