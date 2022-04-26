import { Component } from '@angular/core';
import { NgbCalendar, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import * as moment from 'moment';
import { MomentHelperService } from './moment-helper.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'KariyerTechLessonSix';
  max = 10;
  rate = 7;
  isReadonly = false;

  model: NgbDateStruct | undefined;
  date: {year: number, month: number} | undefined;

  constructor(private calendar: NgbCalendar, private momentHelper:MomentHelperService) {
    console.log('calendar', this.calendar);
  }
  
  selectToday() {
    this.model = this.calendar.getToday();
    console.log('model', this.model);

    // moment ile çalışırken en büyük sıkıntımız direct ngbStruct objesini ay değerini 1 fazla getirir.
    // this.model.month = this.model.month -1;

    // const momentDate = moment(this.model).format('DD/MM/YYYY');
    // console.log('momentDate', momentDate);
    const date =  this.momentHelper.getMomentDateString(this.model,'MM/DD/YY');

    console.log('moment-date', date);


  }
}
