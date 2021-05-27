import { takeUntil } from 'rxjs/operators';
import { CounterService } from './../counter.service';
import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-child-with-service',
  templateUrl: './child-with-service.component.html',
  styleUrls: ['./child-with-service.component.scss'],
})
export class ChildWithServiceComponent implements OnInit {
  counter: number = 0;
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
        this.counter = resp;
      });
  }

  increase() {
    this.counter++;
    this.updateServiceCounter();
  }
  decrease() {
    this.counter--;
    this.updateServiceCounter();
  }

  updateServiceCounter() {
    this.counterService.setCounter(this.counter);
  }
}
