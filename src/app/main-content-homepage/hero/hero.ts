import { Component, signal } from '@angular/core';
import { SOCIAL_LINKS } from '../../shared/data/social-links/social-links';

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
  readonly titleLineOne = 'Fullstack';
  readonly titleLineTwo = 'Developer';
  readonly socialLinks = SOCIAL_LINKS;
  readonly titleLineOneLetters = this.titleLineOne.split('');
  readonly titleLineTwoLetters = this.titleLineTwo.split('');

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
  showGreeting(): void {
    this.greetingExpanded.set(true);
  }

  hideGreeting(): void {
    this.greetingExpanded.set(false);
  }
}
