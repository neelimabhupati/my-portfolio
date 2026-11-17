import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-hero',
  styleUrl: './hero.scss',
  templateUrl: './hero.html',
})
export class Hero {
  readonly greeting = 'Hello world';
  readonly titleLineOne = 'Frontend';
  readonly titleLineTwo = 'Developer';

  readonly socialLinks = [
    {
      label: 'LinkedIn',
      src: '/icons/linkedin.png',
      href: 'https://www.linkedin.com/in/your-profile/',
      external: true,
    },
    {
      label: 'GitHub',
      src: '/icons/github.png',
      href: 'https://github.com/your-username',
      external: true,
    },
    {
      label: 'Email',
      src: '/icons/Email.png',
      href: 'mailto:your.email@example.com',
      external: false,
    },
  ];

  contactMe(): void {
    window.location.href = 'neelimadocument@gmail.com';
  }
}
