import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import * as moment from 'moment-timezone';
import { AreaD3 } from '../model/area-chart-d3.model';
import { AreaData, AreaDataIFace } from '../model/area-chart-data.model';

@Component({
  selector: 'app-timezone',
  templateUrl: './timezone.component.html',
  styleUrls: ['./timezone.component.scss']
})
export class TimezoneComponent implements OnInit {

  @ViewChild('chartContainer', { static: true }) chartContainer: ElementRef;
  @ViewChild('areaChart', { static: true }) areaChart: ElementRef;



  seoul = moment(1489199400000).tz('Asia/Seoul');
  ny = moment(1489199400000).tz('America/New_York');
  bj: moment.Moment;
  now: Date;
  time: number;


  areaD3Chart: AreaD3;
  areaData: AreaData;

  areaJSONData: AreaDataIFace[] = [
    {
      area: 1,
      x1: 0,
      x2: 0.25,
      y1: 100,
      y2: 250,
      company: 'a'
    },
    {
      area: 2,
      x1: 0,
      x2: 0.25,
      y1: 0,
      y2: 100,
      company: 'c'
    },
    {
      area: 3,
      x1: 0.25,
      x2: 0.4,
      y1: 100,
      y2: 250,
      company: 'd'
    },
    {
      area: 4,
      x1: 0.25,
      x2: 0.5,
      y1: 0,
      y2: 100,
      company: 'b'
    },
    {
      area: 5,
      x1: 0.4,
      x2: 0.5,
      y1: 100,
      y2: 250,
      company: 'a'
    },
    {
      area: 6,
      x1: 0.5,
      x2: 0.75,
      y1: 0,
      y2: 250,
      company: 'e'
    },
    {
      area: 7,
      x1: 0.75,
      x2: 1,
      y1: 50,
      y2: 250,
      company: 'b'
    },
    {
      area: 8,
      x1: 0.75,
      x2: 1,
      y1: 0,
      y2: 50,
      company: 'e'
    }
  ];


  constructor() { }

  ngOnInit() {
    // this.createTime();

    this.createData();
    this.createOrUpdateChart();
  }

  private createTime() {
    this.now = new Date();
    this.time = this.now.getTime();
    this.bj = moment(this.time).tz('Asia/Shanghai');
  }

  createOrUpdateChart() {
    if (this.areaD3Chart) {
      this.areaD3Chart.updateChart(
        this.chartContainer,
        this.areaChart,
        this.areaData.graphData(),
        this.areaData.yMax()
      );

    } else {
      console.log('creating a new chart');
      this.areaD3Chart = new AreaD3(
        this.chartContainer,
        this.areaChart,
        '#areaTooltip',
        this.areaData.graphData(),
        this.areaData.yMax()
      );
    }
  }


  private createData() {
    this.areaData = new AreaData(this.areaJSONData);
  }


}
