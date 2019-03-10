import { Component, OnInit, ViewEncapsulation, AfterContentInit } from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'app-d3',
  templateUrl: './d3.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./d3.component.scss']
})
export class D3Component implements OnInit, AfterContentInit {

  alphabet: string[];

  svg: any;
  width: number;
  height: number;
  g: any;

  constructor() { }

  ngOnInit() {
    this.alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
  }

  ngAfterContentInit() {
    this.svg = d3.select('svg');
    this.width = +this.svg.attr('width');
    this.height = +this.svg.attr('height');
    this.g = this.svg.append('g').attr('transform', 'translate(32,' + (this.height / 2) + ')');


    this.update(this.alphabet);

    // The initial display.
    this.update(this.alphabet);

    // Grab a random sample of letters from the alphabet, in alphabetical order.
    d3.interval(() => {
      this.update(d3.shuffle(this.alphabet)
        .slice(0, Math.floor(Math.random() * 26))
        .sort());
    }, 1500);

  }


  update(data: string[]) {

    const t = d3.transition()
      .duration(750);


    // DATA JOIN
    // Join new data with old elements, if any.
    const text = this.g.selectAll('text')
      .data(data, (d: string) => d);


    // EXIT old elements not present in new data.
    text.exit()
      .attr('class', 'exit')
      .transition(t)
      .attr('y', 60)
      .style('fill-opacity', 1e-6)
      .remove();


    // UPDATE


    // UPDATE old elements present in new data.
    text.attr('class', 'update')
      .attr('y', 0)
      .style('fill-opacity', 1)
      .transition(t)
      .attr('x', (d, i) => i * 32);


    // ENTER
    // Create new elements as needed.
    //
    // ENTER + UPDATE
    // After merging the entered elements with the update selection,
    // apply operations to both.


    // ENTER new elements present in new data.
    text.enter().append('text')
      .attr('class', 'enter')
      .attr('dy', '.35em')
      .attr('y', -60)
      .attr('x', (d, i) => i * 32)
      .style('fill-opacity', 1e-6)
      .text(d => d)
      .transition(t)
      .attr('y', 0)
      .style('fill-opacity', 1);

  }


}
