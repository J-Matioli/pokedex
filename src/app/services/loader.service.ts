import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  loadingSub: Subject<boolean> = new Subject<boolean>();
  laoding$: Observable<boolean> = this.loadingSub.asObservable();
  
  constructor() { }

  setLoading(loading: boolean) {
    if(loading === true) {
      this.loadingSub.next(true);     
    }else {
      this.loadingSub.next(false);
    }
  }

}
