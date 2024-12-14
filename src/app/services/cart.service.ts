import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cart: any[] = [];

  constructor() {}

  getCartItems() {
    return this.cart;
  }

  addToCart(product: any) {
    const existingProduct = this.cart.find((item) => item.id === product.id);
    if (existingProduct) {
      existingProduct.quantity += 1; // Increment quantity if product exists
    } else {
      this.cart.push({ ...product, quantity: 1 }); // Add new product
    }
  }

  removeFromCart(productId: number) {
    this.cart = this.cart.filter((item) => item.id !== productId);
  }

  updateQuantity(productId: number, quantity: number) {
    const existingProduct = this.cart.find((item) => item.id === productId);
    if (existingProduct) {
      existingProduct.quantity = quantity;
    }
  }

  clearCart() {
    this.cart = [];
  }
}
