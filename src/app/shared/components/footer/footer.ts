import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  imports: [TranslatePipe],
  selector: 'app-footer',
  styleUrl: './footer.scss',
  templateUrl: './footer.html',
})
export class Footer {
  readonly footerData = {
    homeUrl: '/',
    logoSrc: '/icons/letter-n.png',
    logoAlt: 'Neelima Bhupati',
    copyright: '© Neelima Bhupati',
    year: new Date().getFullYear(),
    links: [
      { label: 'footer.legalNotice', href: '/legal-notice', external: false },
      { label: 'GitHub', href: 'https://github.com/neelimabhupati', external: true },
      { label: 'LinkedIn', href: 'https://www.linkedin.com/in/neelima-bhupati/', external: true },
      { label: 'Email', href: 'neelimabhupatide@gmail.com', external: false },
    ],
  };
}
