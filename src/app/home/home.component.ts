import { Component, OnInit } from '@angular/core';
import {Products} from '../products';
import {ProductServiceService} from '../product-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  products : Products[];

  constructor(public productService: ProductServiceService) { }

  ngOnInit() {
  }

}
