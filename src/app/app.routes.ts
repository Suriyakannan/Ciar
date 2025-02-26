import { Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';

export const routes: Routes = [
  { path: '', component: ProductListComponent }, // Default route
  { path: 'add-product', loadComponent: () => import('./add-product/add-product.component').then(c => c.AddProductComponent) } // Lazy-loaded route
];