import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { RoundSticker } from '../../shared/components/round-sticker/round-sticker';
import { Header } from '../../shared/components/header/header';
import { TranslatePipe } from '@ngx-translate/core';

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
  imports: [RouterLink, RoundSticker, Header, TranslatePipe],
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
    description: 'projectDetails.projects.join.description',
    implementationDetails: 'projectDetails.projects.join.implementationDetails',
    duration: 'projectDetails.projects.join.duration',
    technologies: ['HTML', 'CSS', 'TypeScript', 'Angular', 'Firebase', 'Materialdesign', 'Scrum'],
    image: '/images/Projects/Join.png',
    liveUrl: 'https://neelimabhupati.github.io/join',
    githubUrl: 'https://github.com/neelimabhupati/join',
  },

  {
    id: 'sharkie',
    title: 'Sharkie',
    description: 'projectDetails.projects.sharkie.description',
    implementationDetails: 'projectDetails.projects.sharkie.implementationDetails',
    duration: 'projectDetails.projects.sharkie.duration',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    image: '/images/Projects/Sharkie.png',
    liveUrl: 'https://neelimaranibhupati.developerakademie.net/Sharkie_Game/',
    githubUrl: 'https://github.com/neelimabhupati/Sharkie_Game',
  },

  // Add sharkie and pokodex records here too.
  {
    id: 'pokodex',
    title: 'Pokodex',
    description: 'projectDetails.projects.pokodex.description',
    implementationDetails: 'projectDetails.projects.pokodex.implementationDetails',
    duration: 'projectDetails.projects.pokodex.duration',
    technologies: ['HTML', 'CSS', 'JavaScript', 'RestAPI'],
    image: '/images/Projects/Pokodex.png',
    liveUrl: 'https://neelimaranibhupati.developerakademie.net/Pokedex/',
    githubUrl: 'https://github.com/neelimabhupati/Pokedex',
  },
];