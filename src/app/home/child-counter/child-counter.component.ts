import { Subject } from 'rxjs';
import { CounterService } from './../counter.service';
import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-child-counter',
  templateUrl: './child-counter.component.html',
  styleUrls: ['./child-counter.component.scss'],
})
export class ChildCounterComponent implements OnInit, OnDestroy {
  @Input() counter: number = 0;
  @Output() emitCounterValue: EventEmitter<number> = new EventEmitter<number>();
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
    this.emitCounterValue.emit(this.counter);
  }
  decrease() {
    this.counter--;
    this.emitCounterValue.emit(this.counter);
  }

  ngOnDestroy(): void {
    this._unsubscribeAll.next();
    this._unsubscribeAll.complete();
  }
}
