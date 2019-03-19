import { Component, OnInit, ViewChild, ElementRef, ViewEncapsulation, OnDestroy } from '@angular/core';
import { BubbleDataService } from '../service/bubble-data.service';
import { BubbleData } from '../model/bubble-chart-data.model';
import { BubbleD3 } from '../model/bubble-chart-d3.model';
import * as elementResizeDetectorMaker from 'element-resize-detector';


@Component({
  selector: 'app-d3-bubble-chart',
  templateUrl: './d3-bubble-chart.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./d3-bubble-chart.component.scss']
})
export class D3BubbleChartComponent implements OnInit, OnDestroy {

  data: any[];

  bubbleData: BubbleData;
  bubbled3: BubbleD3;
  hidenButton = false;

  @ViewChild('chartContainer') chartContainer: ElementRef;
  @ViewChild('bubbleChart') bubbleChart: ElementRef;

  private resizeDetector = elementResizeDetectorMaker({ strategy: 'scroll' });



  constructor(private bubbleDataService: BubbleDataService) { }

  ngOnInit() {



    this.bubbleDataService.getData().subscribe(data => {
      this.data = data;
      this.bubbleData = new BubbleData(data);

      // console.log(JSON.stringify(this.bubbleData.getCurrentYearData()));

      this.bubbled3 = new BubbleD3(
        this.chartContainer,
        this.bubbleChart,
        this.bubbleData,
        '#bubbleTooltip1',
        this.bubbleData.getPreviousYearData()
      );


      this.resizeDetector.listenTo(this.chartContainer.nativeElement, (elem: HTMLElement) => {
        this.bubbled3.updateChart(this.bubbleData, this.bubbleData.getPreviousYearData());
      });


      console.log(`max x axis is ${this.bubbleData.getXaxisMax()}`);
      console.log(`max y axis is ${this.bubbleData.getYaxisMax()}`);
      // console.log(`bubble range is ${JSON.stringify(this.bubbleData.getBubbleRange())}`);

    });



  }

  ngOnDestroy() {
    this.resizeDetector.removeAllListeners(this.chartContainer.nativeElement);
    console.log('component destroy!');
  }


  currentYear() {
    console.log('button click, changing to current year');

    this.hidenButton = !this.hidenButton;
    this.bubbled3.updateChart(this.bubbleData, this.bubbleData.getCurrentYearData());
  }

  reset() {
    this.hidenButton = !this.hidenButton;
    this.bubbled3.updateChart(this.bubbleData, this.bubbleData.getPreviousYearData());
  }

}
