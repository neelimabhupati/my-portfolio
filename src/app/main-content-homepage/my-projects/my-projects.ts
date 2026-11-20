import { Component } from '@angular/core';
import { ProjectDetailsButton } from '../../shared/components/project-details-button/project-details-button';;

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
}

@Component({
  imports: [ ProjectDetailsButton ],
  selector: 'app-my-projects',
  styleUrl: './my-projects.scss',
  templateUrl: './my-projects.html',
})
export class MyProjects {

  readonly sectionCopy = {
    eyebrow: 'MY CRAFT',
    heading: 'Projects',
    description: [
      'Three projects, three ways to see how I build for the web. Take a look, click around and try them out yourself.',
      'Fight through three increasingly hard levels in a fantasy jump-and-run, find out who your favourite Pokémon is in a Pokédex, or organise your tasks in a kanban board full of clever little features.',
      'Go ahead and give them a try!',
    ],
  };

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
