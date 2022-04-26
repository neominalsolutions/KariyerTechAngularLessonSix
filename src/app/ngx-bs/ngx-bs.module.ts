import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { RatingModule } from 'ngx-bootstrap/rating';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    TabsModule,
    RatingModule,
    BsDatepickerModule
  ],
  exports:[
    TabsModule,
    RatingModule,
    BsDatepickerModule
  ]
})
export class NgxBsModule { }
