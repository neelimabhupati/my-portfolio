import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './shared/components/header/header';
import { Hero } from './main-content-homepage/hero/hero';
import { Aboutme } from './main-content-homepage/aboutme/aboutme';
import { Skillset } from './main-content-homepage/skillset/skillset';
import { MyProjects} from './main-content-homepage/my-projects/my-projects';

@Component({
  imports: [RouterOutlet, Header, Hero, Aboutme, Skillset, MyProjects],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('my-portfolio');
}
