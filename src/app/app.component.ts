import {Component} from '@angular/core';
import {interval, Subject, Subscription} from 'rxjs' // вид импорта из библиотеки rxjs. interval
// import {} from 'rxjs/operators'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  sub: Subscription //Subscription - библиотека, чтобы отписаться от рассылки. В переменную sub можно записывать результат метода subscribe

  constructor() {

    const intervalStream$ = interval(1000) //знаком $ принято обозначать те переменные, в которых содержится реактивность

    this.sub = intervalStream$.subscribe((value) => {
      console.log(value)
    })

  }

  stop() {
    this.sub.unsubscribe()
  }
}
