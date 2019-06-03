import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, fromEvent, Subscription, of } from 'rxjs';
import { map, filter, takeUntil } from 'rxjs/operators';


@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.scss']
})
export class RxjsComponent implements OnInit, OnDestroy {

  // myObservable: Observable<any>;
  subscription: Subscription;

  dataSource = of(1, 2, 3, 4, 5);

  constructor() { }

  ngOnInit() {
    const scrollContainerElement = document.getElementById('test');

    this.subscription = fromEvent(scrollContainerElement, 'scroll')
      .pipe(
        // takeUntil(userLeavesArticle)
      ).subscribe(event => {
        // console.log(event);
      });


    // this.subscription = this.dataSource.pipe(
    //   map(value => value + 1),
    //   filter( value => value > 3),
    // ).subscribe(value => console.log(value));
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
