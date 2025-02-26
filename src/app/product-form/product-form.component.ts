import { CommonModule } from '@angular/common';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Product } from '../product';
@Component({
  selector: 'app-product-form',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './product-form.component.html',
  styleUrl: './product-form.component.scss'
})
export class ProductFormComponent implements OnInit {
  productForm: FormGroup;
  @Output() productAdded = new EventEmitter<Product>();
  constructor(private fb: FormBuilder) {
    this.productForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      price: ['', [Validators.required, Validators.pattern(/^\d+(\.\d{1,2})?$/)]],
      description: [''],
      imageUrl: ['']
    });
  }

  ngOnInit(): void {}

  onSubmit() {
    if (this.productForm.valid) {
      const newProduct: Product = this.productForm.value as Product;
      this.productAdded.emit(newProduct);
      this.productForm.reset();
    }
  }
}
