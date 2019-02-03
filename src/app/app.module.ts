import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ProductServiceService } from './product-service.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AddProductsComponent } from './add-products/add-products.component';
import { FilterComponent } from './filter/filter.component';
import { UpdateComponent } from './update/update.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AddProductsComponent,
    FilterComponent,
    UpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [ProductServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
