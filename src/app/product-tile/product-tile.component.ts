import { Component, HostListener, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../product';
import { MoneyService } from '../money.service';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-product-tile',
  standalone: true,
  imports: [CommonModule, MatButtonModule],
  templateUrl: './product-tile.component.html',
  styleUrl: './product-tile.component.scss'
})
export class ProductTileComponent {
  @Input()
  public product: Product | null = null;
  constructor(private service : MoneyService){}
  
  @HostListener('click', ['$event.target'])
  onClick(e: MouseEvent) {
    this.service.increase(this.product);
  }
  
  removeProduct(e: MouseEvent) {
    this.service.removeProduct(this.product);
    e.stopPropagation();
  }

  count() :number{
    return this.service.selected.get(this.product!) ?? 0;
  }
}
