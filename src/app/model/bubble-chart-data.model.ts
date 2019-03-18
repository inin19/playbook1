import * as d3 from 'd3';

export class BubbleData {

  data: any[];

  constructor(data: any[]) {
    this.data = data;
  }

  getXaxisMax(): number {
    return d3.max(this.data.map(item => item.FREQ));
  }

  getYaxisMax(): number {
    return d3.max(this.data.map(item => item.AC));
  }

  getBubbleRange(): any {
    return { max: d3.max(this.data.map(item => item.PCC)), min: d3.min(this.data.map(item => item.PCC)) };
  }


  getJSONdata(): any[] {
    return this.data;
  }



}
