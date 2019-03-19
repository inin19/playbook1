import * as d3 from 'd3';
import { ElementRef } from '@angular/core';
import { BubbleData } from './bubble-chart-data.model';


export class BubbleD3 {

  svg: any;
  chart: any;
  width: number;
  height: number;
  xScale: any;
  yScale: any;
  radiusScale: any;
  xAxis: any;
  yAxis: any;
  tooltipDom: string;
  bubbleData: BubbleData; chartContainer: ElementRef;
  chartElementRef: ElementRef;

  margin = { top: 80, right: 80, bottom: 80, left: 80 };

  quadrants: any;

  constructor(
    chartContainer: ElementRef,
    chartElementRef: ElementRef,
    bubbleData: BubbleData,
    tooltipDom: string,
    data: any[]
  ) {
    this.tooltipDom = tooltipDom;
    this.chartContainer = chartContainer;
    this.bubbleData = bubbleData;
    this.chartElementRef = chartElementRef;
    this.updateChart(bubbleData, data);

  }

  updateChart(bubbleData: BubbleData, data: any[]) {
    this.bubbleData = bubbleData;

    const ordinalScale = d3.scaleOrdinal()
      .domain(data.map(item => item.CLAIM_TYPE))
      .range(d3.schemePaired);

    const domID = '#' + this.chartElementRef.nativeElement.id;
    this.width = this.chartElementRef.nativeElement.offsetWidth - this.margin.left - this.margin.right;
    this.height = this.chartElementRef.nativeElement.offsetHeight - this.margin.top - this.margin.bottom;

    this.svg = d3.select(domID).select('svg');


    this.chart = this.svg.select('.chart-svg-area')
      .attr('transform', `translate(${this.margin.left},${this.margin.top})`);


    this.chart.select('.quadrants-top-left')
      .attr('width', this.width / 2)
      .attr('height', this.height / 2);

    this.chart.select('.quadrants-top-right')
      .attr('x', this.width / 2)
      .attr('width', this.width / 2)
      .attr('height', this.height / 2);

    this.chart.select('.quadrants-bottom-left')
      .attr('y', this.height / 2)
      .attr('width', this.width / 2)
      .attr('height', this.height / 2);

    this.chart.select('.quadrants-bottom-right')
      .attr('x', this.width / 2)
      .attr('y', this.height / 2)
      .attr('width', this.width / 2)
      .attr('height', this.height / 2);


    // text label for the x axis
    this.chart.select('.x-axis-label')
      .attr('transform', `translate( ${this.width / 2} , ${this.height + this.margin.top - 20} )`)
      .style('text-anchor', 'middle');


    // text label for the y axis
    this.chart.select('.y-axis-label')
      .attr('transform', 'rotate(-90)')
      .attr('y', 0 - this.margin.left + 15)
      .attr('x', 0 - (this.height / 2))
      .attr('dy', '1em')
      .style('text-anchor', 'middle');


    const adjusted = 0.05;

    // create scales
    this.xScale = d3.scaleLinear()
      .domain([0, (1 + adjusted) * this.bubbleData.getXaxisMax()])
      .range([0, this.width]);

    this.yScale = d3.scaleLinear()
      .domain([0, (1 + adjusted) * this.bubbleData.getYaxisMax()])
      .range([this.height, 0]);

    this.radiusScale = d3.scaleLinear()
      .domain([this.bubbleData.getBubbleRange().min, this.bubbleData.getBubbleRange().max])
      .range([5, 40]);



    const xaxis = d3.axisBottom(this.xScale);
    // .tickFormat((d) => d3.format('.0%')(Math.abs(Number(d))));

    const yaxis = d3.axisLeft(this.yScale);
    // .tickSize(-this.width);


    this.xAxis = this.chart.select('.x.axis')
      .attr('transform', `translate(0, ${this.height})`)
      .call(xaxis);


    this.yAxis = this.chart.select('.y.axis')
      .call(yaxis);


    // update chart
    let groups = this.chart.selectAll('.group')
      .data(data.map(item => item.CLAIM_TYPE));

    groups.exit().remove();

    // update existing groups
    // groups
    //   .attr('transform', d => 'translate(' + this.xScale(d) + ',0)');

    // adding new groups
    groups
      .enter()
      .append('g')
      .classed('group', true);
    // .attr('transform', d => 'translate(' + this.xScale(d) + ',0)');

    // rejoin data VERY IMPORTANT
    groups = this.chart.selectAll('.group')
      .data(data.map(item => item.CLAIM_TYPE));


    // creating circles
    const dots = groups.selectAll('.dot')
      .data((d) => data.filter((item) => d === item.CLAIM_TYPE));

    dots.exit().remove();


    // update dots

    dots
      .transition()
      .attr('r', d => this.radiusScale(d.PCC))
      .attr('cx', d => this.xScale(d.FREQ))
      .attr('cy', d => this.yScale(d.AC))
      .duration(2000);


    dots
      .enter()
      .append('circle')
      .classed('dot', true)
      .attr('r', d => this.radiusScale(d.PCC))
      .attr('cx', d => this.xScale(d.FREQ))
      .attr('cy', d => this.yScale(d.AC))
      .style('fill', (d) => ordinalScale(d.CLAIM_TYPE))
      .style('stroke', (d) => ordinalScale(d.CLAIM_TYPE))
      .on('mouseover', this.handleMouseOver(this.tooltipDom))
      .on('mousemove', this.handleMouseMove(this.chartContainer, this.tooltipDom))
      .on('mouseout', this.handleMouseOut(this.tooltipDom))
      ;

  }


  handleMouseOver(tooltipDomID: string): (d, i) => void {
    return (d, i) => {

      d3.select(d3.event.currentTarget)
        .classed('hover', true);


      d3.select(tooltipDomID)
        .style('opacity', 1)
        .html(
          d.CLAIM_TYPE
        );

    };
  }



  handleMouseOut(tooltipDomID: string): (d, i) => void {
    return (d, i) => {

      d3.select(d3.event.currentTarget)
        .classed('hover', false);

      d3.select(tooltipDomID)
        .style('opacity', 0);

    };
  }


  handleMouseMove(chartParent: ElementRef, tooltipDomID: string): (d, i) => void {
    return (d, i) => {
      const bounds = chartParent.nativeElement.getBoundingClientRect();
      // console.log(JSON.stringify(bounds));

      d3.select(tooltipDomID)
        .style('left', d3.event.clientX - bounds.left + 10 + 'px')
        .style('top', d3.event.clientY - bounds.top + 10 + 'px');
    };
  }


}

