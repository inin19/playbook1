import { Component, OnInit, OnDestroy } from '@angular/core';
import { LanguageService } from '../service/language.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-multilanguage',
  templateUrl: './multilanguage.component.html',
  styleUrls: ['./multilanguage.component.scss']
})
export class MultilanguageComponent implements OnInit, OnDestroy {

  languageSubscription: Subscription;
  languageCode: string;

  constructor(private languageService: LanguageService) { }

  ngOnInit() {

    this.languageCode = 'ZHO';

    this.languageSubscription = this.languageService.getLanguage().subscribe(languageCode => {
      this.languageCode = languageCode;
    });

  }
  ngOnDestroy() {
    this.languageSubscription.unsubscribe();
  }


  changeCode() {
    console.log('language code change!');
    this.languageService.sendLanguage('ENG');
  }

}
