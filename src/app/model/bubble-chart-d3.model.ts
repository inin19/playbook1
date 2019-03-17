import * as d3 from 'd3';
import { ElementRef } from '@angular/core';


export class BubbleD3 {

  private svg: any;
  private chart: any;
  private width: number;
  private height: number;

  private xScale: any;
  private yScale: any;

  private tooltipDom: string;

  private margin = { top: 10, right: 20, bottom: 50, left: 50 };

  constructor(
    chartContainer: ElementRef,
    chartElementRef: ElementRef,
    range: any,
    data: any[],
    tooltipDom: string,
  ) {
    this.tooltipDom = tooltipDom;
    this.updateChart(chartContainer, chartElementRef, range, data);

  }

  updateChart(
    chartContainer: ElementRef,
    chartElementRef: ElementRef,
    range: any,
    data: any[]) {


    const domID = '#' + chartElementRef.nativeElement.id;
    this.width = chartElementRef.nativeElement.offsetWidth - this.margin.left - this.margin.right;
    this.height = chartElementRef.nativeElement.offsetHeight - this.margin.top - this.margin.bottom;


  }

}
