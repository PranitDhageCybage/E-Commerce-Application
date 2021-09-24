import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrderRoutingModule } from './order-routing.module';
import { OrderHistoryComponent } from './order-history/order-history.component';
import { PreviewComponent } from './preview/preview.component';
import { HttpClientModule } from '@angular/common/http';
import { OrderService } from './order.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [OrderHistoryComponent, PreviewComponent],
  imports: [CommonModule, OrderRoutingModule, HttpClientModule, NgbModule],
  providers: [OrderService],
})
export class OrderModule {}
