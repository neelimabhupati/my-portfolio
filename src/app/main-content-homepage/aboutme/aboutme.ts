import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
@Component({
  imports: [TranslatePipe],
  selector: 'app-aboutme',
  styleUrl: './aboutme.scss',
  templateUrl: './aboutme.html',
})

export class Aboutme {
  readonly eyebrow = 'about.eyebrow';
  readonly heading = 'about.heading';
  readonly ctaLabel = 'about.cta';

  readonly statusItems = [
    {
      label: 'about.basedIn',
      icon: '/icons/LocationIcon.png',
      image: '/images/Yellow.png.png',
      className: 'about-status about-status--location',
    },
    {
      label: 'about.relocate',
      icon: '/icons/Relocate.png',
      image: '/images/Blue.png.png',
      className: 'about-status about-status--relocate',
    },
    {
      label: 'about.remote',
      icon: '/icons/remotework.png',
      image: '/images/Orange.png.png',
      className: 'about-status about-status--remote',
    },
  ];

  readonly paragraphs = [
    'about.paragraph1', 'about.paragraph2'];
}
