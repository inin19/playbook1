import { Pipe, PipeTransform } from '@angular/core';


class TranslationENG {
  public static translate = {
    yingying: 'Yingying Chen',
  };
}


class TranslationZHO {
  public static translate = {
    yingying: '陈瑛瑛',
  };
}




@Pipe({
  name: 'languagePipe'
})
export class LanguagePipePipe implements PipeTransform {

  transform(value: any, languageCode: any): any {
    switch (languageCode) {
      case 'ENG':
        return TranslationENG.translate[value];
      case 'ZHO':
        return TranslationZHO.translate[value];
      default:
        return TranslationENG.translate[value];
    }

  }

}


