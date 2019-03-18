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
      AC: 10,
      PCC_CURRENT: 25,
      FREQ_CURRENT: 1.5,
      AC_CURRENT: 11
    },
    {
      CLAIM_TYPE: 'TYPE_2',
      PCC: 25,
      FREQ: 1.5,
      AC: 16.7,
      PCC_CURRENT: 10,
      FREQ_CURRENT: 1.2,
      AC_CURRENT: 20
    },
    {
      CLAIM_TYPE: 'TYPE_3',
      PCC: 15,
      FREQ: 2,
      AC: 7.5,
      PCC_CURRENT: 16,
      FREQ_CURRENT: 1.6,
      AC_CURRENT: 10
    },
    {
      CLAIM_TYPE: 'TYPE_4',
      PCC: 30,
      FREQ: 2.5,
      AC: 12,
      PCC_CURRENT: 40,
      FREQ_CURRENT: 3.7,
      AC_CURRENT: 10
    },
    {
      CLAIM_TYPE: 'TYPE_5',
      PCC: 50,
      FREQ: 3,
      AC: 16.7,
      PCC_CURRENT: 20,
      FREQ_CURRENT: 4,
      AC_CURRENT: 14.8
    },
    {
      CLAIM_TYPE: 'TYPE_6',
      PCC: 5,
      FREQ: 3.5,
      AC: 1.4,
      PCC_CURRENT: 10,
      FREQ_CURRENT: 3,
      AC_CURRENT: 2
    },
    {
      CLAIM_TYPE: 'TYPE_7',
      PCC: 7.5,
      FREQ: 4,
      AC: 1.9,
      PCC_CURRENT: 8,
      FREQ_CURRENT: 10,
      AC_CURRENT: 4
    },
    {
      CLAIM_TYPE: 'TYPE_8',
      PCC: 100,
      FREQ: 5,
      AC: 20,
      PCC_CURRENT: 80,
      FREQ_CURRENT: 5,
      AC_CURRENT: 15
    }
  ]

  constructor() { }


  getData(): Observable<any> {
    return of(BubbleDataService.data);
  }

}
