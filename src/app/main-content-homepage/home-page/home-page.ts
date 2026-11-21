import { Component } from '@angular/core';
import { Header } from '../../shared/components/header/header';
import { Hero } from '../hero/hero';
import { Aboutme } from '../aboutme/aboutme';
import { Skillset } from '../skillset/skillset';
import { MyProjects } from '../my-projects/my-projects';
 
@Component({
  imports: [Header, Hero, Aboutme, Skillset, MyProjects],
  selector: 'app-home-page',
  styleUrl: './home-page.scss',
  templateUrl: './home-page.html',
})
export class HomePage {}
