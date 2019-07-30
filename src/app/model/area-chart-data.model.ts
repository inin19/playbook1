import * as d3 from 'd3';

export class AreaData {

  data: AreaDataIFace[];

  constructor(data: AreaDataIFace[]) {
    this.data = data;
  }


  graphData(): AreaDataIFace[] {

    // const groups = new Set(this.data.map(item => item.company));


    return this.data;
  }

  yMax(): number {
    return d3.max(this.data, (d: AreaDataIFace) => d.y2);
  }


}


export interface AreaDataIFace {
  area: number;
  x1: number;
  x2: number;
  y1: number;
  y2: number;
  company: string;
}
