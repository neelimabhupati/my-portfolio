import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

interface Project {
  id: string;
  title: string;
  description: string;
  implementationDetails: string;
  duration: string;
  technologies: string[];
  image: string;
  liveUrl?: string;
  githubUrl?: string;
}

@Component({
  imports: [RouterLink],
  selector: 'app-project-details',
  styleUrl: './project-details.scss',
  templateUrl: './project-details.html',
})
export class ProjectDetails {
  private readonly route = inject(ActivatedRoute);

  get projectId(): string {
    return this.route.snapshot.paramMap.get('id') ?? '';
  }

  get project(): Project | undefined {
    return projects.find(item => item.id === this.projectId);
  }

  get nextProject(): Project | undefined {
    const index = projects.findIndex(item => item.id === this.projectId);

    if (index === -1) {
      return undefined;
    }

    const nextIndex = (index + 1) % projects.length;
    return projects[nextIndex];
  }
}

const projects: Project[] = [
  {
    id: 'join',
    title: 'Join',
    description: 'Join is an Angular application where users can sign in and then create and manage tasks and contacts, with all data stored in Firebase. Tasks can be moved between different statuses by simple drag & drop.',
    implementationDetails: 'This Angular application lets users log in and then create and manage tasks and contacts, with all data stored in Firebase. Tasks can be moved between statuses using drag & drop.',
    duration: 'Add project duration',
    technologies: ['HTML', 'CSS', 'TypeScript', 'Angular', 'Firebase', 'Materialdesign', 'Scrum'],
    image: '/images/Projects/Join.png',
    liveUrl: 'https://neelimabhupati.github.io/join',
    githubUrl: 'https://github.com/neelimabhupati/join',
  },

  {
    id: 'sharkie',
    title: 'Sharkie',
    description: 'Guide SHARKIE through swarms of pufferfish and jellyfish, and face the final boss fight against the evil Orca STRESSED WILLY!',
    implementationDetails: 'Sharkie is built with JavaScript and follows Object-Oriented Programming (OOP) principles. The code is organised with classes, inheritance and encapsulation, which keeps the application modular and easy to extend.',
    duration: 'Add project duration',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    image: '/images/Projects/Sharkie.png',
    liveUrl: 'https://neelimaranibhupati.developerakademie.net/Sharkie_Game/',
    githubUrl: 'https://github.com/neelimabhupati/Sharkie_Game',
  },

  // Add sharkie and pokodex records here too.
  {
    id: 'pokodex',
    title: 'Pokodex',
    description: 'The Pokédex is a web application for browsing Pokémon and viewing their detailed information. It is built with JavaScript, HTML and CSS, loads its data dynamically and shows it in an interactive, easy-to-use interface.',
    implementationDetails: 'The focus of this project is JavaScript and working with a REST API. It shows how to request data from an external API, process it, and display it dynamically on the page.',
    duration: 'Add project duration',
    technologies: ['HTML', 'CSS', 'JavaScript', 'RestAPI'],
    image: '/images/Projects/Pokodex.png',
    liveUrl:'https://neelimaranibhupati.developerakademie.net/Pokedex/',
    githubUrl: 'https://github.com/neelimabhupati/Pokedex',
  },
];