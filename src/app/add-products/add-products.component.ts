import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from '../product-service.service';

@Component({
  selector: 'app-add-products',
  templateUrl: './add-products.component.html',
  styleUrls: ['./add-products.component.css']
})
export class AddProductsComponent implements OnInit {

  name:string;
  color:string;

  constructor(public productService:ProductServiceService){
    this.name = '';
    this.color = '';
  }
 
  ngOnInit() {
  }

  onSave():void{
      this.productService.addProducts(this.name,this.color);
      this.name = '';
      this.color = '';
  }
}
