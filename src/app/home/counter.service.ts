import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CounterService {
  private counterSubject: Subject<number> = new Subject();
  counterObservable = this.counterSubject.asObservable();

  constructor() {}

  setCounter(value: number) {
    this.counterSubject.next(value);
  }
}
