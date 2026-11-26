import { Component, inject } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  imports: [],
  selector: 'app-languages',
  styleUrl: './languages.scss',
  templateUrl: './languages.html',
})
export class Languages {
  readonly translate = inject(TranslateService);
  switchLanguage(lang: 'en' | 'de') {
    this.translate.use(lang);
  }
}
