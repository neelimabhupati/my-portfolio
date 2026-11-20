import { Component } from '@angular/core';

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
}

@Component({
  imports: [],
  selector: 'app-my-projects',
  styleUrl: './my-projects.scss',
  templateUrl: './my-projects.html',
})
export class MyProjects {

  readonly featuredProject = {
    id: 'join',
    title: 'Join',
    description:
      'A Kanban-style task manager to create, organize, and track tasks.',
    image: '/images/Projects/Join.png',
    sticker: '/images/Projects/ENV_Sticker.png',
  };

  readonly projects: Project[] = [{
    id: 'sharkie',
    title: 'Sharkie',
    description:
      'An underwater game where Sharkie explores the ocean and faces sea creatures.',
    image: '/images/Projects/Sharkie.png',
  },
  {
    id: 'pokodex',
    title: 'Pokédex',
    description:
      'A Pokédex app to search Pokémon and view their profiles and types.',
    image: '/images/Projects/Pokodex.png',
  }];
}
