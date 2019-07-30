import * as d3 from 'd3';
import { ElementRef } from '@angular/core';
import { AreaDataIFace } from './area-chart-data.model';
import { tickStep } from 'd3';




export class AreaD3 {

  tooltipDom: string;
  svg: any;
  chart: any;
  width: number;
  height: number;
  xScale: any;
  yScale: any;
  radiusScale: any;
  xAxis: any;
  yAxis: any;

  margin = { top: 80, right: 80, bottom: 80, left: 80 };


  constructor(
    chartContainer: ElementRef,
    chartElementRef: ElementRef,
    tooltipDom: string,
    areaData: AreaDataIFace[],
    yMax: number
  ) {
    this.tooltipDom = tooltipDom;
    this.updateChart(chartContainer, chartElementRef, areaData, yMax);
  }

  updateChart(
    chartContainer: ElementRef,
    chartElementRef: ElementRef,
    areaData: AreaDataIFace[],
    yMax: number
  ) {

    const domID = '#' + chartElementRef.nativeElement.id;


    // assgin color to each carrier
    const ordinalScale = d3.scaleOrdinal()
      .domain(areaData.map(item => item.company))
      .range(d3.schemePaired);

    this.width = chartElementRef.nativeElement.offsetWidth - this.margin.left - this.margin.right;
    this.height = chartElementRef.nativeElement.offsetHeight - this.margin.top - this.margin.bottom;

    this.svg = d3.select(domID).select('svg');


    this.chart = this.svg.select('.chart-svg-area')
      .attr('transform', `translate(${this.margin.left},${this.margin.top})`);



    // create scales
    this.xScale = d3.scaleLinear()
      .domain([0, 1])
      .range([0, this.width]);

    this.yScale = d3.scaleLinear()
      .domain([0, yMax])
      .range([this.height, 0]);

    const xaxis = d3.axisBottom(this.xScale);
    const yaxis = d3.axisLeft(this.yScale);


    this.xAxis = this.chart.select('.x.axis')
      .attr('transform', `translate(0, ${this.height})`)
      .call(xaxis);


    this.yAxis = this.chart.select('.y.axis')
      .call(yaxis);



    // DATA JOIN
    // Join new data with old elements, if any.
    const rectangle = this.chart.selectAll('rect')
      // .data(areaData, (d: AreaDataIFace) => d.company);
      .data(areaData);


    // UPDATE
    // Update old elements as needed.

    // ENTER
    // Create new elements as needed.
    //
    // ENTER + UPDATE
    // After merging the entered elements with the update selection,
    // apply operations to both.

    rectangle
      .enter()
      .append('rect')
      .merge(rectangle)
      .attr('x', (d: AreaDataIFace) => this.xScale(d.x1))
      .attr('y', (d: AreaDataIFace) => this.yScale(d.y2))
      .attr('width', (d: AreaDataIFace) => this.xScale(d.x2) - this.xScale(d.x1))
      .attr('height', (d: AreaDataIFace) => this.yScale(d.y1) - this.yScale(d.y2))
      .style('fill', (d: AreaDataIFace) => ordinalScale(d.company))


      ;


    // EXIT
    // Remove old elements as needed.
    rectangle.exit().remove();


  }

}
