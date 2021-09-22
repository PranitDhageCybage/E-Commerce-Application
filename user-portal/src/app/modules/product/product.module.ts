import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { CartComponent } from './cart/cart.component';
import { GalleryComponent } from './gallery/gallery.component';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProductService } from './product.service';
import { CartService } from './cart.service';
import { CategoryService } from './category.service';


@NgModule({
  declarations: [
    CartComponent,
    GalleryComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    HttpClientModule,
    NgbModule
  ],
  providers:[
    ProductService,
    CartService,
    CategoryService
  ]
})
export class ProductModule { }
