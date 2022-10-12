import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NavbarService {
  private countSubject = new BehaviorSubject<number>(0);
  public _counter: Observable<number> = this.countSubject.asObservable();

  constructor() {}

  set counter(count: any) {
    this.countSubject.next(count);
  }

  get counter() {
    return this.countSubject;
  }
}
