import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export abstract class BaseService {

  constructor(protected http: HttpClient) { }

  protected getData<T>(url: string): Observable<T> {
    return this.http.get<T>(`${environment.urlApi}${url}`).pipe(
      catchError(err => this.errorHandler(err))
    )
     
  }


  private errorHandler(err: any) {    
    return throwError(() => err);
  }
}
