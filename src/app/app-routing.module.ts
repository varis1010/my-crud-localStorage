import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AddProductsComponent } from './add-products/add-products.component';
import { UpdateComponent } from './update/update.component';


const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'addProduct', component:AddProductsComponent},
  {path:'update/:id', component:UpdateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
