import { Component, OnInit } from '@angular/core';
import * as Rx from 'rxjs';

@Component({
  selector: 'app-simple-observer',
  templateUrl: './simple-observer.component.html',
  styleUrls: ['./simple-observer.component.css']
})
export class SimpleObserverComponent implements OnInit {
  observable;
  observer1;

  constructor() {
    this.observable = Rx.Observable.create(function (observer) {
      observer.next(1);
      observer.next(2);
      observer.next(3);
      setTimeout(() => {
        observer.next(4);
        observer.complete();
      }, 1000);
    });
  }

  ngOnInit() {
  }

  print() {
    console.log(this.observable);
    this.observer1 = this.observable.subscribe( x => {
      console.log(x);
    });
    console.log(this.observer1);
  }

  fuera() {
    console.log(this.observer1);
  }

}
