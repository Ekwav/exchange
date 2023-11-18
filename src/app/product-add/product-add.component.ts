import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../product';
import { MoneyService } from '../money.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { ColorPickerModule } from 'ngx-color-picker';

@Component({
  selector: 'app-product-add',
  standalone: true,
  imports: [CommonModule, FormsModule, MatInputModule, MatButtonModule, ColorPickerModule],
  templateUrl: './product-add.component.html',
  styleUrl: './product-add.component.scss'
})
export class ProductAddComponent {
  newProduct: Product = { name: "", price: 0, color: "#ffffff" };

  constructor(private service: MoneyService, private router: Router) { }

  addProduct() {
    if (this.newProduct.price != 0)
      this.service.addProduct(this.newProduct);
    this.newProduct = { name: "", price: 0, color: "#ffffff" };
    this.router.navigate(['products']);
  }

  cancel() {
    this.router.navigate(['products']);
  }

  negate() {
    this.newProduct.price = -this.newProduct.price;
  }
}
