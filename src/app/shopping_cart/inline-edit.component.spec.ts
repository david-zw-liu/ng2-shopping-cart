import {
  it,
  inject,
  describe,
  beforeEachProviders,
  expect
} from '@angular/core/testing';
import { InlineEditComponent } from './inline-edit.component';
describe('InlineEditComponent', () => {
  beforeEachProviders(() => [
    InlineEditComponent
  ]);
  it ('should work', inject([InlineEditComponent], (app: InlineEditComponent) => {
    // Add real test here
    expect(2).toBe(2);
  }));
});
