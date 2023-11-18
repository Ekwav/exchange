import { Injectable } from '@angular/core';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class MoneyService {
  reset() {
    this.selected.clear();
  }
  removeProduct(product: Product | null) {
    const p = this.selected.get(product!);
    if (p === undefined) {
      return;
    }
    if (p > 1) {
      this.selected.set(product!, p - 1);
    } else {
      this.selected.delete(product!);
    }
  }
  increase(product: Product | null) {
    const p = this.selected.get(product!);
    if (p === undefined) {
      this.selected.set(product!, 1);
    } else {
      this.selected.set(product!, p + 1);
    }
  }

  constructor() { 
    const stored = localStorage.getItem("products");
    if (stored !== null) {
      this.products = JSON.parse(stored);
    } else {
      this.products = [{ name: "Kinderpunsch", price: 3.5 }];
    }
  }

  public products: Product[] = [];
  public units: Product[] = [
  { name: "10 Cents", price: -0.10 },
  { name: "20 Cents", price: -0.20 },
  { name: "50 Cents", price: -0.50 },
  { name: "1 Euro", price: -1.00 },
  { name: "2 Euro", price: -2.00 },
  { name: "5 Euro", price: -5.00 },
  { name: "10 Euro", price: -10.00 },
  { name: "20 Euro", price: -20.00 },
  { name: "50 Euro", price: -50.00 },
  { name: "100 Euro", price: -100.00 },
  { name: "200 Euro", price: -200.00 },
  { name: "500 Euro", price: -500.00 }
  ];

  public selected: Map<Product, number> = new Map();

  public addProduct(product: Product) {
    this.products.push(product);
    this.storeProducts();
  }

  public removeProductOption(product: Product) {
    const index = this.products.indexOf(product);
    if (index > -1) {
      this.products.splice(index, 1);
      this.storeProducts();
    }
  }

  private storeProducts() {
    localStorage.setItem("products", JSON.stringify(this.products));
  }

  public getProducts(): Product[] {
    return this.products;
  }

  public getUnits(): Product[] {
    return this.units;
  }

  public getSum(): number {
    let sum = 0;
    this.selected.forEach((value: number, key: Product) => {
      sum += value * key.price;
    });
    return sum;
  }

  /** Breaks up change */
  public getChange(): Map<string, number> {
    const change = new Map<string, number>();
    let sum = this.getSum();
    this.units.slice().reverse().forEach((value: Product) => {
      const count = Math.floor(sum / value.price);
      if (count > 0) {
        change.set(value.name, count);
        sum -= count * value.price;
      }
    });
    return change;
  }

}
