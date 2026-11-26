import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  imports: [TranslatePipe],
  selector: 'app-colleagues-thoughts',
  styleUrl: './colleagues-thoughts.scss',
  templateUrl: './colleagues-thoughts.html',
})
export class ColleaguesThoughts {
  readonly testimonials = [
    {
      quote: 'testimonials.quote1',
      name: 'Jin Soo Jang',
      role: 'testimonials.role1',
      profileUrl: 'https://www.linkedin.com/in/jinsoo-jang/',
    },
    {
      quote: 'testimonials.quote2',
      name: 'Patrick wagner',
      role: 'testimonials.role2',
      profileUrl: 'https://www.linkedin.com/in/patrickwagnerdev/',
    },
    {
      quote: '§rd colleque',
      name: 'Colleague Name',
      role: 'role',
      profileUrl: 'https://www.linkedin.com/in/profile-name/',
    },
  ];
}
