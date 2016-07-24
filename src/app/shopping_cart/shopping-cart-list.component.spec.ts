import {
  it,
  inject,
  describe,
  beforeEachProviders,
  expect
} from '@angular/core/testing';
import { ShoppingCartListComponent } from './shopping-cart-list.component';
describe('ShoppingCartFormComponent', () => {
  beforeEachProviders(() => [
    ShoppingCartListComponent
  ]);
  it ('should work', inject([ShoppingCartListComponent], (app: ShoppingCartListComponent) => {
    // Add real test here
    expect(2).toBe(2);
  }));
});
