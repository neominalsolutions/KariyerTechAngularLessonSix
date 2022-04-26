import { Injectable } from '@angular/core';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class MomentHelperService {

  constructor() { }

  getMomentDateString(date:NgbDateStruct, format:string = 'DD/MM/YYYY') {
      date.month = date.month -1;

      return moment(date).format(format);
  }
}
