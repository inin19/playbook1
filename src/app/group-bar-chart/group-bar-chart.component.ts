import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3';


@Component({
  selector: 'app-group-bar-chart',
  templateUrl: './group-bar-chart.component.html',
  styleUrls: ['./group-bar-chart.component.scss']
})
export class GroupBarChartComponent implements OnInit {

  dataOriginal: any = [
    {
      Pokemon: 'Bulbasaur',
      Type: 'Grass',
      Generation: 'I',
      Attack: 49,
      Defense: 49,
      Speed: 45,
      HP: 45
    },
    {
      Pokemon: 'Charmander',
      Type: 'Fire',
      Generation: 'I',
      Attack: 52,
      Defense: 43,
      Speed: 65,
      HP: 39
    },
    {
      Pokemon: 'Squirtle',
      Type: 'Water',
      Generation: 'I',
      Attack: 48,
      Defense: 65,
      Speed: 43,
      HP: 44
    },
    {
      Pokemon: 'Diglett',
      Type: 'Ground',
      Generation: 'I',
      Attack: 55,
      Defense: 25,
      Speed: 95,
      HP: 10
    },
    {
      Pokemon: 'Bellsprout',
      Type: 'Grass',
      Generation: 'I',
      Attack: 75,
      Defense: 35,
      Speed: 40,
      HP: 50
    },
    {
      Pokemon: 'Ponyta',
      Type: 'Fire',
      Generation: 'I',
      Attack: 85,
      Defense: 55,
      Speed: 90,
      HP: 50
    },
    {
      Pokemon: 'Totodile',
      Type: 'Water',
      Generation: 'II',
      Attack: 65,
      Defense: 64,
      Speed: 43,
      HP: 50
    },
    {
      Pokemon: 'Cyndaquil',
      Type: 'Fire',
      Generation: 'II',
      Attack: 52,
      Defense: 43,
      Speed: 65,
      HP: 39
    },
    {
      Pokemon: 'Marill',
      Type: 'Water',
      Generation: 'II',
      Attack: 20,
      Defense: 50,
      Speed: 40,
      HP: 70
    },
    {
      Pokemon: 'Phanpy',
      Type: 'Ground',
      Generation: 'II',
      Attack: 60,
      Defense: 60,
      Speed: 40,
      HP: 90
    }
  ];

  data: any[];

  margin = { top: 20, right: 40, bottom: 80, left: 80 };
  width = 800 - this.margin.left - this.margin.right;
  height = 380 - this.margin.top - this.margin.bottom;

  // X axis scale is defined by the length of the array divided by the width of the chart
  // second parametere (.2) defines distance between
  x0 = d3.scaleBand()
    .rangeRound([0, this.width])
    .padding(0.2)
    ;


  x1 = d3.scaleBand();

  // Y axis scale is defined by a linear scale, max being the height of the chart.
  y = d3.scaleLinear()
    .range([this.height, 0]);

  color = d3.scaleOrdinal()
    .range(['#e74c3c', '#2ecc71', '#f1c40f', '#3498db']); // <-- Red, Green, Yellow, Blue

  xAxis = d3.axisBottom(this.x0)
    .tickSize(10);


  // additional features, like its alignment and tickFormat
  yAxisLeft = d3.axisLeft(this.y)
    .tickSize(7)
    .tickFormat(d3.format('.2s'));

  // Another Y Axis for Mr. Simmon
  yAxisRight = d3.axisRight(this.y)
    .tickSize(7)
    .tickFormat(d3.format('.2s'));


  svg: any;

  sortedXvalues: any;

  pokemon: any;
  columnBars: any;

  constructor() { }

  ngOnInit() {



    this.sortedXvalues = {};


    //  This is defining a var (svg) that will draw our div at this current box
    this.svg = d3.select('svg')
      .attr('width', this.width + this.margin.left + this.margin.right)
      .attr('height', this.height + this.margin.top + this.margin.bottom)
      .attr('class', 'chart')
      .append('g')
      .attr('transform', 'translate(' + this.margin.left + ',' + this.margin.top + ')');



    this.dataOriginal.sort((a, b) => {
      return d3.ascending(a.Type, b.Type); // <-- By default we sort by Type
    });



    // ['Attack', 'Defense', 'Speed', 'HP']

    // tslint:disable-next-line: variable-name
    const stats_names = d3.keys(this.dataOriginal[0]).filter((key) => key !== 'Pokemon' && key !== 'Type' && key !== 'Generation');

    // console.log(`marign: ${JSON.stringify(this.margin)}, width: ${this.width}, height: ${this.height}`);


    this.dataOriginal.forEach(d => {
      d.Stats = stats_names.map((item) => {
        return { name: item, value: +d[item] };
      });
    });


    // only get the first 8

    this.data = this.dataOriginal.slice(0, 9);

    // this.data = this.dataOriginal.slice(1, 10);


    // 'Stats': [{'name':'Attack','value':55},{'name':'Defense','value':25},{'name':'Speed','value':95},{'name':'HP','value':10}]


    this.x0
      .domain(this.data.map(d => d.Pokemon));

    this.x1
      .domain(stats_names)
      .range([0, this.x0.bandwidth()]);


    const max = d3.max(this.data, item => {

      // tslint:disable-next-line: no-string-literal
      return d3.max(item['Stats'], d => +d['value']);
    });

    this.y
      .domain([0, max]);

    console.log(`max y axis value is ${max}`);


    const TypeCount = d3.nest()
      // tslint:disable-next-line: no-string-literal
      .key((d) => d['Type'])
      .rollup((leaves: any) => leaves.length)
      .entries(this.data);



    this.pokemon = this.svg.selectAll('.pokemon')
      .data(this.data, d => d.Pokemon);



    this.pokemon.enter()
      .append('g')
      .attr('class', 'pokemon')
      .attr('transform', (d) => 'translate(' + this.x0(d.Pokemon) + ',0)');

    // very important
    this.pokemon = this.svg.selectAll('.pokemon');




    this.columnBars = this.pokemon.selectAll('rect')
      .data((d) => {
        return d.Stats;
      });



    // const sortSelection = this.svg.selectAll('.type')
    //   .data(this.data);




    this.columnBars
      .enter()
      .append('rect')
      .attr('width', this.x1.bandwidth())
      .attr('x', (d) => this.x1(d.name))
      .attr('y', (d) => this.y(d.value))
      .attr('height', (d) => this.height - this.y(d.value))
      .style('fill', (d) => this.color(d.name))
      ;

    // console.log(columnBars);


    // this.data.forEach(element => {
    //   console.log(JSON.stringify(element));
    // });



    this.svg.append('g')
      .attr('class', 'x axis')
      .attr('transform', 'translate(0,' + this.height + ')')
      .call(this.xAxis)
      .append('text')
      .attr('y', 60)
      .attr('x', (this.width / 2) - 40)
      .style('font-size', 12)
      .style('text-transform', 'uppercase')
      .style('opacity', .8)
      .text('Pokemans');





    this.svg.append('g')
      .attr('class', 'y axis')
      .call(this.yAxisLeft)
      .append('text')
      .attr('transform', 'rotate(-90)')
      .attr('y', 6)
      .attr('dy', '-5em')
      .attr('x', 30 - this.height / 2)
      .style('text-anchor', 'end')
      .style('font-size', 12)
      .style('text-transform', 'uppercase')
      .style('opacity', .8)
      .text('Points');

    // this.svg.append('g')
    //   .attr('class', 'y axis')
    //   .attr('transform', 'translate(' + this.width + ' ,0)')
    //   .call(this.yAxisRight);



  }



  changeSort() {

    // this.data.sort((a, b) => {
    //   // tslint:disable-next-line: no-string-literal
    //   return d3.ascending(a['Generation'], b['Generation']);
    // });

    console.log('change');


    const t = d3.transition()
      .duration(500)
      .ease(d3.easeLinear)
      ;


    this.data = this.dataOriginal.slice(1, 10);




    this.x0.domain(this.data.map((d) => d.Pokemon));


    this.svg.selectAll('.x').filter('.axis')
      .transition(t)
      .attr('transform', 'translate(0,' + this.height + ')')
      .call(this.xAxis);







    // update chart
    this.pokemon = this.svg.selectAll('.pokemon')
      .data(this.data, d => d.Pokemon);



    this.pokemon.exit().remove();






    this.pokemon
      // .transition()
      // .duration(1000)
      .transition(t)
      .attr('class', 'pokemon')
      .attr('transform', (d) => 'translate(' + this.x0(d.Pokemon) + ',0)');







    this.pokemon.enter()
      .append('g')
      .attr('class', 'pokemon')
      .attr('transform', (d) => {
        console.log(this.x0.bandwidth());
        return 'translate(' + this.width + ',0)';
      })
      .transition(t)

      .attr('transform', (d) => {
        return 'translate(' + this.x0(d.Pokemon) + ',0)';
      });




    // // very important
    this.pokemon = this.svg.selectAll('.pokemon');




    this.columnBars = this.pokemon.selectAll('rect')
      .data((d) => {
        return d.Stats;
      });






    this.columnBars
      .enter()
      .append('rect')
      .attr('width', this.x1.bandwidth())
      .attr('x', (d) => this.x1(d.name))
      .attr('y', (d) => this.y(d.value))
      .attr('height', (d) => this.height - this.y(d.value))
      .style('fill', (d) => this.color(d.name))
      ;




  }

}
