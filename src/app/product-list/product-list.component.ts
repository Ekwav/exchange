import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductTileComponent } from '../product-tile/product-tile.component';
import { Product } from '../product';
import { MoneyService } from '../money.service';
import { Router } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductTileComponent, MatButtonModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent {
  constructor(public service: MoneyService, public router:Router){}
}
