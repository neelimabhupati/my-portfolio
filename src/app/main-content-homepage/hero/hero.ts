import { Component, signal } from '@angular/core';
import { SOCIAL_LINKS } from '../../shared/data/social-links/social-links';
import { TranslatePipe } from '@ngx-translate/core';
@Component({
  imports: [TranslatePipe],
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
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  }

  showGreeting(): void {
    this.greetingExpanded.set(true);
  }

  hideGreeting(): void {
    this.greetingExpanded.set(false);
  }
}
