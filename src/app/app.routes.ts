import { Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductFormComponent } from './product-form/product-form.component';

export const routes: Routes = [
    { path: 'products', component: ProductListComponent },
    { path: 'form', component: ProductFormComponent },
    { path: '',   redirectTo: '/products', pathMatch: 'full' }
];
