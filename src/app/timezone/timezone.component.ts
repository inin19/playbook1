import { Component, OnInit } from '@angular/core';
import * as moment from 'moment-timezone';

@Component({
  selector: 'app-timezone',
  templateUrl: './timezone.component.html',
  styleUrls: ['./timezone.component.sass']
})
export class TimezoneComponent implements OnInit {


  seoul = moment(1489199400000).tz('Asia/Seoul');
  ny = moment(1489199400000).tz('America/New_York');

  bj: moment.Moment;

  now: Date;

  time: number;

  constructor() { }

  ngOnInit() {

    this.now = new Date();

    this.time = this.now.getTime();



    this.bj = moment(this.time).tz('Asia/Shanghai');




    // console.log(`seoul ${seoul.format()}`);
    // console.log(`new yrok ${ny.format()}`);

  }

}
