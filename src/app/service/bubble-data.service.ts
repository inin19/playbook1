import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class BubbleDataService {

  static data = [
    {
      CLAIM_TYPE: 'TYPE_1',
      PCC: 10,
      FREQ: 1,
      AC: 10
    },
    {
      CLAIM_TYPE: 'TYPE_2',
      PCC: 25,
      FREQ: 1.5,
      AC: 16.7
    },
    {
      CLAIM_TYPE: 'TYPE_3',
      PCC: 15,
      FREQ: 2,
      AC: 7.5
    },
    {
      CLAIM_TYPE: 'TYPE_4',
      PCC: 30,
      FREQ: 2.5,
      AC: 12
    },
    {
      CLAIM_TYPE: 'TYPE_5',
      PCC: 50,
      FREQ: 3,
      AC: 16.7
    },
    {
      CLAIM_TYPE: 'TYPE_6',
      PCC: 5,
      FREQ: 3.5,
      AC: 1.4
    },
    {
      CLAIM_TYPE: 'TYPE_7',
      PCC: 7.5,
      FREQ: 4,
      AC: 1.9
    },
    {
      CLAIM_TYPE: 'TYPE_8',
      PCC: 100,
      FREQ: 5,
      AC: 20
    }
  ];

  constructor() { }


  getData(): Observable<any> {
    return of(BubbleDataService.data);
  }

}
