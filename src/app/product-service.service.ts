import { Injectable } from '@angular/core';
import { Products } from '../app/products';
import { Observable, of } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  products: Products[];
  nextId:number;

  constructor(){

    this.products = this.getProducts()
      if(this.products.length == 0){
        this.nextId = 0;
      }
      else{
        let maxId = this.products[this.products.length-1].id;
        this.nextId = maxId+1;
      }
  }


  getProducts():Products[]{
    let getLocalStorage = JSON.parse(localStorage.getItem('products'));
    return getLocalStorage == null ? [] : getLocalStorage.products;
  }
 
  setLocalStorage(products:Products[]):void{
    localStorage.setItem('products', JSON.stringify({products:products}));
  }

  addProducts(name:string, color:string):void{
      let product = new Products(this.nextId, name , color);
      let products = this.getProducts();
      products.push(product);
      this.setLocalStorage(products);
      this.nextId++;
  }

  removeProducts(id:number):void{
    let product = this.getProducts();
    product = product.filter((products)=> products.id != id);
    this.setLocalStorage(product);
  }

  getProduct(id:number):Observable<Products>{
    return of(this.products.find(product => product.id === id));
  }

  updateProduct(id:number,product:Products):void{
    this.products.map((rec)=>{
      if(rec.id === id){
        rec.name = product.name;
        rec.color = product.color;
        return rec;
      }
    });
    this.setLocalStorage(this.products);
  }
   
}
