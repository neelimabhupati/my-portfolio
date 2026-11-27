import { Component } from '@angular/core';
import { Header } from '../shared/components/header/header';
import { Footer } from '../shared/components/footer/footer';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  imports: [Header, Footer, TranslatePipe],
  selector: 'app-legalnotice',
  styleUrl: './legalnotice.scss',
  templateUrl: './legalnotice.html',
})

export class Legalnotice {
  content = {
    title: 'legalNotice.title',
    address: {
      heading: 'legalNotice.addressHeading',
      lines: ['Neelimarani Bhupati', 'Angelbrechting', '85586 Poing'],
      country: 'legalNotice.country',
    },
    contact: {
      heading: 'legalNotice.contactHeading',
      emailLabel: 'legalNotice.emailLabel',
      email: 'neelimabhupatide@gmail.com',
    },
    sections: [
      {
        title: 'legalNotice.termsHeading',
        paragraphs: ['legalNotice.termsText'],
      },
      {
        title: 'legalNotice.contentHeading',
        paragraphs: ['legalNotice.contentText1', 'legalNotice.contentText2'],
      },
      {
        title: 'legalNotice.linksHeading',
        paragraphs: ['legalNotice.linksText'],
      },
      {
        title: 'legalNotice.copyrightHeading',
        paragraphs: ['legalNotice.copyrightText'],
      },
      {
        title: 'legalNotice.projectsHeading',
        paragraphs: ['legalNotice.projectsText'],
      },
    ],
  };
}