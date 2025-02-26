import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';
import { CommonModule } from '@angular/common';
import { ProductFormComponent } from '../product-form/product-form.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule,ProductFormComponent,FormsModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent implements OnInit {
  products: Product[] = []; 

  constructor(private productService: ProductService) { }

  ngOnInit(): void {

    this.productService.getProducts().subscribe(
      (data) => {
        this.products = data;
      },
      (error) => {
        console.error('Error fetching products:', error);
      }
    );
 
  //  this.products = [
  //     { id: '1', name: 'Product A', description: '...', price: 20, imageUrl: '...' },
  //     { id: '2', name: 'Product B', description: '...', price: 30, imageUrl: '...' }
  //  ];
  }
  onProductAdded(newProduct: Product): void {
    this.products.push(newProduct); 
  }
}
