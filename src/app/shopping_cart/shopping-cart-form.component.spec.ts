import {
  it,
  inject,
  describe,
  beforeEachProviders,
  expect
} from '@angular/core/testing';
import { ShoppingCartFormComponent } from './shopping-cart-form.component';
describe('ShoppingCartFormComponent', () => {
  beforeEachProviders(() => [
    ShoppingCartFormComponent
  ]);
  it ('should work', inject([ShoppingCartFormComponent], (app: ShoppingCartFormComponent) => {
    // Add real test here
    expect(2).toBe(2);
  }));
});
