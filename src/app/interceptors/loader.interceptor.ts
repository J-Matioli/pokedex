import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse
} from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { map } from 'rxjs/operators';
import { LoaderService } from '../services/loader.service';

@Injectable()
export class LoaderInterceptor implements HttpInterceptor {

  constructor(private loader: LoaderService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    
    this.loader.setLoading(true);

    return next.handle(request)
      .pipe(
        map(((event: HttpEvent<any>) => {
          if(event instanceof HttpResponse) {
            this.loader.setLoading(false)            
          }
          return event;
        })),
        catchError((err) => {
          this.loader.setLoading(false);
          return throwError(() => err);
        })
      )
  }
}
