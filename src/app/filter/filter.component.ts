import { Component, OnInit, Input } from '@angular/core';
import {Products} from '../products';
import {ProductServiceService} from '../product-service.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  @Input()
  products:Products;
 
  constructor(public proudctService : ProductServiceService) { }

  ngOnInit() {
  
  }

  removeItem(){
    this.proudctService.removeProducts(this.products.id);
  }

}
