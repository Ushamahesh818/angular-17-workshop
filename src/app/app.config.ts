import { ApplicationConfig, Injectable } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { myFirstInterceptorInterceptor } from './interceptor/my-first-interceptor.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes),provideHttpClient(withInterceptors([myFirstInterceptorInterceptor])),]
};
