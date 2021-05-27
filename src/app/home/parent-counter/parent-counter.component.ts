import { takeUntil } from 'rxjs/operators';
import { CounterService } from './../counter.service';
import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-parent-counter',
  templateUrl: './parent-counter.component.html',
  styleUrls: ['./parent-counter.component.scss'],
})
export class ParentCounterComponent implements OnInit {
  counter: number = 0;
  counter2: number = 0;
  private _unsubscribeAll: Subject<any>;
  constructor(private counterService: CounterService) {
    this._unsubscribeAll = new Subject<any>();
  }

  ngOnInit(): void {
    this.subscribeToCounterSubject();
  }

  subscribeToCounterSubject() {
    this.counterService.counterObservable
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe((resp: number) => {
        this.counter2 = resp;
      });
  }

  increase() {
    this.counter++;
  }
  decrease() {
    this.counter--;
  }
  increase2() {
    this.counter2++;
    this.updateServiceCounter();
  }
  decrease2() {
    this.counter2--;
    this.updateServiceCounter();
  }
  updateServiceCounter() {
    this.counterService.setCounter(this.counter2);
  }
  emitCounterValue(event: number) {
    this.counter = event;
  }
}
