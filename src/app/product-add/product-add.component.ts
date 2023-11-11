import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../product';
import { MoneyService } from '../money.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-product-add',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './product-add.component.html',
  styleUrl: './product-add.component.scss'
})
export class ProductAddComponent {
  newProduct: Product = { name: "", price: 0 };

  constructor(private service: MoneyService, private router: Router) { }

  addProduct() {
    if (this.newProduct.price != 0)
      this.service.addProduct(this.newProduct);
    this.newProduct = { name: "", price: 0 };
    this.router.navigate(['products']);
  }

  cancel() {
    this.router.navigate(['products']);
  }
}
