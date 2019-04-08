import { Component, OnInit, OnDestroy, ViewEncapsulation } from '@angular/core';
import { LanguageService } from '../service/language.service';
import { Subscription } from 'rxjs';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-multilanguage',
  templateUrl: './multilanguage.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./multilanguage.component.scss']
})
export class MultilanguageComponent implements OnInit, OnDestroy {

  languageSubscription: Subscription;
  languageCode: string;

  constructor(private languageService: LanguageService, private spinner: NgxSpinnerService) { }

  ngOnInit() {

    this.languageCode = 'ZHO';

    this.languageSubscription = this.languageService.getLanguage().subscribe(languageCode => {
      this.languageCode = languageCode;
    });

    this.spinner.show();


    setTimeout(() => {
      this.spinner.show();
    }, 5000);

  }
  ngOnDestroy() {
    this.languageSubscription.unsubscribe();
  }


  changeCode() {
    console.log('language code change!');
    this.languageService.sendLanguage('ENG');
  }

}
