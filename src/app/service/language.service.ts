import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  private languageSubject = new Subject<string>();

  constructor() { }

  sendLanguage(languageCode: string) {
    this.languageSubject.next(languageCode);
  }

  getLanguage(): Observable<string> {
    return this.languageSubject.asObservable();
  }
}
