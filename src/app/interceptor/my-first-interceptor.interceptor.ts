import { HttpInterceptorFn } from '@angular/common/http';


export const myFirstInterceptorInterceptor: HttpInterceptorFn = (req, next) => {
  const hardCodeToken="23erer2234ddsf";
  const requestWithToken=req.clone({
    setHeaders:{
      Authorization:`Bearer ${hardCodeToken}`      
    }
  });
  return next(requestWithToken);
};
