import { Component, signal} from '@angular/core';
import { SOCIAL_LINKS } from '../../data/social-links/social-links';
import { Languages } from '../languages/languages';
import { TranslatePipe } from '@ngx-translate/core';
@Component({
  imports: [Languages, TranslatePipe],
  selector: 'app-header',
  styleUrl: './header.scss',
  templateUrl: './header.html',
})
export class Header {
  readonly menuOpen = signal(false);
  readonly socialLinks = SOCIAL_LINKS;

  toggleMenu(): void {
    this.menuOpen.update((open) => !open);
  }

  closeMenu(): void {
    this.menuOpen.set(false);
  }

  
}
