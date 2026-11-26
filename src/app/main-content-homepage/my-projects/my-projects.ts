import { Component } from '@angular/core';
import { ProjectDetailsButton } from '../../shared/components/project-details-button/project-details-button';;
import { TranslatePipe } from '@ngx-translate/core';

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
}

@Component({
  imports: [ProjectDetailsButton, TranslatePipe],
  selector: 'app-my-projects',
  styleUrl: './my-projects.scss',
  templateUrl: './my-projects.html',
})
export class MyProjects {

  readonly sectionCopy = {
    eyebrow: 'projects.eyebrow',
    heading: 'projects.heading',
    description: [
      'projects.intro1',
      'projects.intro2',
      'projects.intro3',
    ],
  };

  readonly featuredProject = {
    id: 'join',
    title: 'Join',
    description: 'projects.joinDescription',
    image: '/images/Projects/Join.png',
    sticker: '/images/Projects/ENV_Sticker.png',
  };

  readonly projects: Project[] = [{
    id: 'sharkie',
    title: 'Sharkie',
    description: 'projects.sharkieDescription',
    image: '/images/Projects/Sharkie.png',
  },
  {
    id: 'pokodex',
    title: 'Pokédex',
    description: 'projects.pokedexDescription',
    image: '/images/Projects/Pokodex.png',
  }];
}
