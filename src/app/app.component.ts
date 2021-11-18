import {Component} from '@angular/core';
import {interval} from 'rxjs' // вид импорта из библиотеки rxjs. interval
// import {} from 'rxjs/operators'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor() {

    const intervalStream$ = interval(1000) //знаком $ принято обозначать те переменные, в которых содержится реактивность

    intervalStream$.subscribe((value) => {
      console.log(value)
    })

  }
}
