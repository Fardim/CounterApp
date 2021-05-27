import { CounterService } from './../counter.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child-with-service',
  templateUrl: './child-with-service.component.html',
  styleUrls: ['./child-with-service.component.scss'],
})
export class ChildWithServiceComponent implements OnInit {
  counter: number = 0;
  constructor(private counterService: CounterService) {}

  ngOnInit(): void {}
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
