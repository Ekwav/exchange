import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoneyService } from '../money.service';
import { Router } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-result',
  standalone: true,
  imports: [CommonModule, MatButtonModule],
  templateUrl: './result.component.html',
  styleUrl: './result.component.scss'
})
export class ResultComponent {
  public result: [string, number][] = [];
  public sum: number = 0;
  constructor(private service: MoneyService, private router: Router) {
    service.getChange().forEach((v, k) => {
      this.result.push([k, v]);
    });

    this.sum = service.getSum();
  }

  done() {
    this.service.reset();
    this.router.navigate(['products']);
  }
}
