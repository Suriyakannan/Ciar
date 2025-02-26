import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule],
  providers: [ProductService],
  template: `
    <div class="product-list">
      <div *ngFor="let product of products" class="product-item">
        <img [src]="product.image" alt="{{ product.name }}" width="100">
        <h3>{{ product.name }}</h3>
        <p>{{ product.description }}</p>
      </div>
    </div>
  `,
  styles: []
})
export class ProductListComponent implements OnInit {
  products: any[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.productService.getProducts().subscribe(data => {
      this.products = data;
    });
  }
}