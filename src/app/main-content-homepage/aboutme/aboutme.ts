import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-aboutme',
  styleUrl: './aboutme.scss',
  templateUrl: './aboutme.html',
})

export class Aboutme {
  readonly eyebrow = "WHO'S NEELIMA?";
  readonly heading = 'About me';
  readonly ctaLabel = "Let's talk";

  readonly statusItems = [
    {
      label: 'Based in Munich',
      icon: '⌖',
      image: '/images/Yellow.png.png',
      className: 'about-status about-status--location',
    },
    {
      label: 'Open to relocate',
      icon: '↗',
      image: '/images/Blue.png.png',
      className: 'about-status about-status--relocate',
    },
    {
      label: 'Open to remote work',
      icon: '⌂',
      image: '/images/Orange.png.png',
      className: 'about-status about-status--remote',
    },
  ];

  readonly paragraphs = [
    'I have 7.5 years of experience in IT as a C++ developer.',
    "Web development has interested me since the beginning of my career, and I'm now following that interest by growing into a frontend developer.",
  ];
}
