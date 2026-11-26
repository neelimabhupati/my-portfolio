import { Component } from '@angular/core';

@Component({
  imports: [],
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
      { label: 'Legal Notice', href: '/legal-notice', external: false },
      { label: 'GitHub', href: 'https://github.com/your-username', external: true },
      { label: 'LinkedIn', href: 'https://www.linkedin.com/in/your-profile/', external: true },
      { label: 'Email', href: 'mailto:your.email@example.com', external: false },
    ],
  };
}
