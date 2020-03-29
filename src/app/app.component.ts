import { Product } from "./models/Product";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  
  products: Array<Product> = [
    new Product(1, "Maçã", 2.75),
    new Product(2, "Laranja", 1.50),
    new Product(2, "Ameixa", 4.50)
  ];

  cart = [];
  total: number = 0;

  checkCart(product){
    let cartProduct = this.cart.find(element => {
      return element.name == product.name;
    });
    return (cartProduct != undefined);
  }

  insertCart(product){
    if(this.checkCart(product)){
      this.updateCart(product);
    }
    else{
      this.cart.push({
        name: product.name,
        quantity: 1,
        price: product.price
      });
      this.total += product.price;
    }
  }

  updateCart(cartProduct) {
    this.cart.find(element => {
      if (element.name == cartProduct.name) {
        element.quantity += 1;
        this.total += element.price;
      }
    });
  }
}

