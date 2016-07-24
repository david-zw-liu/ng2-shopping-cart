import {
  it,
  inject,
  describe,
  beforeEachProviders,
  expect
} from '@angular/core/testing';
import { ShoppingCartComponent } from './shopping-cart.component';
describe('ShoppingCartComponent', () => {
  beforeEachProviders(() => [
    ShoppingCartComponent
  ]);
  it ('should work', inject([ShoppingCartComponent], (app: ShoppingCartComponent) => {
    // Add real test here
    expect(2).toBe(2);
  }));
});
