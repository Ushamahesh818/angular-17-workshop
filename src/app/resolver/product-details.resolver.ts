import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { ProductServiceService } from '../services/product-service.service';

export const productDetailsResolver: ResolveFn<Object> = (route, state) => {

  const id=+route.params['id'];
  return inject(ProductServiceService).fetchProductInfo(id);
};
