import { Component, signal } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-skillset',
  styleUrl: './skillset.scss',
  templateUrl: './skillset.html',
})
export class Skillset {
  readonly eyebrow = 'MY STACK';
  readonly heading = 'Skill set';
  readonly description =
    'Experienced in creating practical projects across a range of frontend technologies and UI concepts. I maintain a continuous learning mindset, regularly exploring new tools and techniques to grow my capabilities.';
  readonly peelInstruction = 'Click to peel';
  readonly peeled = signal(false);
  readonly peelMessage = "Also, I'm interested in diving into:";

  readonly peelAssets = {
    front: '/images/03_Stickers/01_Skills%20-%20Peel%20off/Default.png',
    arrow: '/images/03_Stickers/Arrow.png',
    back: '/images/03_Stickers/01_Skills%20-%20Peel%20off/Final.png',
    transition: '/images/03_Stickers/01_Skills%20-%20Peel%20off/Transition.png'
  };

  readonly additionalSkills = [
    { name: 'React', icon: '/icons/skills/React.png' },
    { name: 'Vue.Js', icon: '/icons/skills/Vue.Js.png' },
  ];
  readonly skills = [
    { name: 'HTML', icon: '/icons/skills/HTML.png' },
    { name: 'CSS', icon: '/icons/skills/CSS.png' },
    { name: 'Javascript', icon: '/icons/skills/Javascript.png' },
    { name: 'Typescript', icon: '/icons/skills/Typescript.png' },
    { name: 'Firebase', icon: '/icons/skills/Firebase.svg' },
    { name: 'RestAPI', icon: '/icons/skills/RestAPI.png' },
    { name: 'Angular', icon: '/icons/skills/Angular.png' },
    { name: 'Supabase', icon: '/icons/skills/Supabase.png' },
    { name: 'Scrum', icon: '/icons/skills/Scrum.png' },
    { name: 'Git', icon: '/icons/skills/Git.png' },
    { name: 'Materialdesign', icon: '/icons/skills/Materialdesign.png' },
  ];

  togglePeel(): void {
    this.peeled.update((isPeeled) => !isPeeled);
  }
}
