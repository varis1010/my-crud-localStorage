import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from '../product-service.service';
import {Products} from '../products';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  products:Products;
 
  constructor(public productsService:ProductServiceService,
              public route:ActivatedRoute,
              public location:Location) { }

  ngOnInit() {
    this.updateProduct();
  }

  updateProduct():void{
    const id = +this.route.snapshot.paramMap.get('id');
    this.productsService.updateProduct(id).subscribe(product => this.products = product);
  }

  goBack():void{
    this.location.back();
  }
}
