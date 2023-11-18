import { Component, HostListener, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../product';
import { MoneyService } from '../money.service';
import { MatButtonModule } from '@angular/material/button';
import { MatRippleModule } from '@angular/material/core';

@Component({
  selector: 'app-product-tile',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatRippleModule],
  templateUrl: './product-tile.component.html',
  styleUrl: './product-tile.component.scss'
})
export class ProductTileComponent {
  @Input()
  public product: Product | null = null;

  public color: string = "#f0f0f0";
  public textColor = "#000000";
  constructor(private service: MoneyService) { }

  @HostListener('click', ['$event.target'])
  onClick(e: MouseEvent) {
    this.service.increase(this.product);
  }

  ngOnInit() {
    this.updateColor();
  }

  removeProduct(e: MouseEvent) {
    this.service.removeProduct(this.product);
    e.stopPropagation();
  }

  count(): number {
    return this.service.selected.get(this.product!) ?? 0;
  }

  updateColor() {
    // hash the name to get a color
    let hash = 0;
    for (let i = 0; i < this.product!.name.length; i++) {
      hash = this.product!.name.charCodeAt(i) + ((hash << 5) - hash);
    }
    let color = '#';
    let full = color + (((hash >> 24) & 0xFF) << 16 | ((hash >> 16) & 0xFF) << 8 | ((hash >> 8) & 0xFF)).toString(16).padStart(6, '0');
    this.color = this.product?.color ?? full;
    this.textColor = this.shouldTextBeBlack() ? "#000000" : "#ffffff";
  }

  private shouldTextBeBlack() {
    return (parseInt(this.color.substring(1, 3), 16) * 0.299 + parseInt(this.color.substring(3, 5), 16) * 0.587 + parseInt(this.color.substring(5, 7), 16) * 0.114) > 121;
  }
}
