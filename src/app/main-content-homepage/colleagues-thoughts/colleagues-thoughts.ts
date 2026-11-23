import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-colleagues-thoughts',
  styleUrl: './colleagues-thoughts.scss',
  templateUrl: './colleagues-thoughts.html',
})
export class ColleaguesThoughts {
  readonly testimonials = [
    {
      quote: 'Neelima always greets everyone with a warm smile and never leaves a question unanswered – she asks actively and with real curiosity. In our team she was a dependable teammate who, with persistence and effort, delivered more than expected. I’m convinced she will give her best to reach her goals wherever she goes.',
      name: 'Jin Soo Jang',
      role: 'Fullstack developer',
      profileUrl: 'https://www.linkedin.com/in/jinsoo-jang/',
    },
    {
      quote: 'Working with Neelima was a great experience! She is dedicated, hardworking, and always brings a positive attitude to the team. Her commitment and reliability made her a valuable part of our project.',
      name: 'Patrick wagner',
      role: 'Frontend developer',
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
