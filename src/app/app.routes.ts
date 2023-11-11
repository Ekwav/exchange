import { Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductAddComponent } from './product-add/product-add.component';
import { MoneyListComponent } from './money-list/money-list.component';
import { ResultComponent } from './result/result.component';

export const routes: Routes = [{ path: "products", component: ProductListComponent },
{path:"product/add", component: ProductAddComponent},
{path:"moneys", component: MoneyListComponent},
    { path: "result", component: ResultComponent },
    // redirect default to products
    { path: "", redirectTo: "products", pathMatch: "full" }];
