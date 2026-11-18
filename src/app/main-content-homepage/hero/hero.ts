import { Component, signal } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-hero',
  styleUrl: './hero.scss',
  templateUrl: './hero.html',
})
export class Hero {
  readonly greeting = 'Hello world';
  greetingExpanded = signal(false);
  private greetingTimeout: number | undefined;
  readonly titleLineOne = 'Frontend';
  readonly titleLineTwo = 'Developer';
  readonly titleLineOneLetters = this.titleLineOne.split('');
  readonly titleLineTwoLetters = this.titleLineTwo.split('');

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

  expandGreeting(): void {
    this.greetingExpanded.set(true);

    if (this.greetingTimeout !== undefined) {
      window.clearTimeout(this.greetingTimeout);
    }

    this.greetingTimeout = window.setTimeout(() => {
      this.greetingExpanded.set(false);
    }, 2000);
  }

  contactMe(): void {
    window.location.href = 'neelimadocument@gmail.com';
  }

}
