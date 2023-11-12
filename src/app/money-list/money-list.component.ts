import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoneyService } from '../money.service';
import { ProductTileComponent } from '../product-tile/product-tile.component';
import { Router } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-money-list',
  standalone: true,
  imports: [CommonModule, ProductTileComponent, MatButtonModule ],
  templateUrl: './money-list.component.html',
  styleUrl: './money-list.component.scss'
})
export class MoneyListComponent {
  constructor(public service: MoneyService, public router: Router) { }
}
