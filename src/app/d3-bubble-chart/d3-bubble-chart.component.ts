import { Component, OnInit } from '@angular/core';
import { BubbleDataService } from '../service/bubble-data.service';

@Component({
  selector: 'app-d3-bubble-chart',
  templateUrl: './d3-bubble-chart.component.html',
  styleUrls: ['./d3-bubble-chart.component.scss']
})
export class D3BubbleChartComponent implements OnInit {

  data: any[];

  constructor(private bubbleDataService: BubbleDataService) { }

  ngOnInit() {
    this.bubbleDataService.getData().subscribe(data => {
      this.data = data;
    });

    console.log(this.data);
  }

}
