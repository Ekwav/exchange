import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoneyListComponent } from './money-list.component';

describe('MoneyListComponent', () => {
  let component: MoneyListComponent;
  let fixture: ComponentFixture<MoneyListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MoneyListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MoneyListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
