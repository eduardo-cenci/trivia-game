import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';

import { CategoryService } from '../../services/category/category.service';
import { Category } from '../../interfaces/category';

export const categoryResolver: ResolveFn<Category[] | undefined> = () => {
  return inject(CategoryService).getAll();
};
