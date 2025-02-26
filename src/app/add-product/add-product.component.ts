import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-product',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  template: `
    <form [formGroup]="productForm" (ngSubmit)="onSubmit()">
      <label for="name">Name:</label>
      <input id="name" formControlName="name">
      <div *ngIf="productForm.get('name')?.invalid && productForm.get('name')?.touched">
        Name is required and must be at least 3 characters.
      </div>

      <label for="price">Price:</label>
      <input id="price" type="number" formControlName="price">
      <div *ngIf="productForm.get('price')?.invalid && productForm.get('price')?.touched">
        Price is required and must be a number.
      </div>

      <button type="submit" [disabled]="productForm.invalid">Add Product</button>
    </form>
  `,
  styles: []
})
export class AddProductComponent {
  productForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.productForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      price: ['', [Validators.required, Validators.pattern(/^\d+$/)]]
    });
  }

  onSubmit() {
    console.log(this.productForm.value);
  }
}