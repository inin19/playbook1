import * as d3 from 'd3';

export class BubbleData {

  data: any[];

  constructor(data: any[]) {
    this.data = data;
  }

  getXaxisMax(): number {
    return d3.max(this.data.map(item => item.FREQ).concat(this.data.map(item => item.FREQ_CURRENT)));
  }

  getYaxisMax(): number {
    return d3.max(this.data.map(item => item.AC).concat(this.data.map(item => item.AC_CURRENT)));
  }

  getBubbleRange(): any {
    // tslint:disable-next-line: max-line-length
    return {
      max:
        d3.max(this.data.map(item => item.PCC).concat(this.data.map(item => item.PCC_CURRENT))),
      min:
        d3.min(this.data.map(item => item.PCC).concat(this.data.map(item => item.PCC_CURRENT)))
    };
  }


  getPreviousYearData(): any[] {
    return this.data.map(item => {
      return { CLAIM_TYPE: item.CLAIM_TYPE, PCC: item.PCC, AC: item.AC, FREQ: item.FREQ };
    });
  }

  getCurrentYearData(): any[] {
    return this.data.map(item => {
      return { CLAIM_TYPE: item.CLAIM_TYPE, PCC: item.PCC_CURRENT, AC: item.AC_CURRENT, FREQ: item.FREQ_CURRENT };
    });
  }



}
