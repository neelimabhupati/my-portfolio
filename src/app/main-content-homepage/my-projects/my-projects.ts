import { Component } from '@angular/core';
import { ProjectDetailsButton } from '../../shared/components/project-details-button/project-details-button';;

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
}

@Component({
  imports: [ProjectDetailsButton],
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
      'Join is an Angular application where users can sign in and then create and manage tasks and contacts, with all data stored in Firebase. Tasks can be moved between different statuses by simple drag & drop.',
    image: '/images/Projects/Join.png',
    sticker: '/images/Projects/ENV_Sticker.png',
  };

  readonly projects: Project[] = [{
    id: 'sharkie',
    title: 'Sharkie',
    description:
      'Sharkie is a JavaScript application built around Object-Oriented Programming (OOP). It shows how to organize code with classes, inheritance and encapsulation, resulting in an application that is modular and easy to scale.',
    image: '/images/Projects/Sharkie.png',
  },
  {
    id: 'pokodex',
    title: 'Pokédex',
    description:
      'Pokedex is a JavaScript project centered on working with a REST API. It shows how to request data from external APIs, process it, and render it dynamically in the interface.',
    image: '/images/Projects/Pokodex.png',
  }];
}
