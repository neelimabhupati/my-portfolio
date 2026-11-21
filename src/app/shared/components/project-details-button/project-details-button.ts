import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  imports: [RouterLink],
  selector: 'app-project-details-button',
  styleUrl: './project-details-button.scss',
  templateUrl: './project-details-button.html',
})
export class ProjectDetailsButton {
  @Input({ required: true } )projectId!: string;
}
