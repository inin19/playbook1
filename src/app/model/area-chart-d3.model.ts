import * as d3 from 'd3';
import { ElementRef } from '@angular/core';




export class AreaD3 {

  tooltipDom: string;
  areaData = [
    {
      area: 1,
      x1: 0,
      x2: 0.25,
      y1: 100,
      y2: 250
    },
    {
      area: 2,
      x1: 0,
      x2: 0.25,
      y1: 0,
      y2: 100
    },
    {
      area: 3,
      x1: 0.25,
      x2: 0.4,
      y1: 100,
      y2: 250
    },
    {
      area: 4,
      x1: 0.25,
      x2: 0.5,
      y1: 0,
      y2: 100
    },
    {
      area: 5,
      x1: 0.4,
      x2: 0.5,
      y1: 100,
      y2: 250
    },
    {
      area: 6,
      x1: 0.5,
      x2: 0.75,
      y1: 0,
      y2: 250
    },
    {
      area: 7,
      x1: 0.75,
      x2: 1,
      y1: 50,
      y2: 250
    },
    {
      area: 8,
      x1: 0.75,
      x2: 1,
      y1: 0,
      y2: 50
    }
  ];

  constructor(
    chartContainer: ElementRef,
    chartElementRef: ElementRef,
    tooltipDom: string,
    areaData: any[]
  ) {
    this.tooltipDom = tooltipDom;
    this.updateChart(chartContainer, chartElementRef, areaData);
  }

  updateChart(
    chartContainer: ElementRef,
    chartElementRef: ElementRef,
    areaData: any[]
  ) {

    const domID = '#' + chartElementRef.nativeElement.id;


  }

}
