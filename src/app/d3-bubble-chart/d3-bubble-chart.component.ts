import { Component, OnInit } from '@angular/core';
import { BubbleDataService } from '../service/bubble-data.service';
import { BubbleData } from '../model/bubble-chart-data.model';

@Component({
  selector: 'app-d3-bubble-chart',
  templateUrl: './d3-bubble-chart.component.html',
  styleUrls: ['./d3-bubble-chart.component.scss']
})
export class D3BubbleChartComponent implements OnInit {

  data: any[];

  bubbleData: BubbleData;

  constructor(private bubbleDataService: BubbleDataService) { }

  ngOnInit() {
    this.bubbleDataService.getData().subscribe(data => {
      this.data = data;
      this.bubbleData = new BubbleData(data);
    });

    console.log(`max x axis is ${this.bubbleData.getXaxisMax()}`);
    console.log(`max y axis is ${this.bubbleData.getYaxisMax()}`);
    console.log(`bubble range is ${JSON.stringify(this.bubbleData.getBubbleRange())}`);

  }

}
