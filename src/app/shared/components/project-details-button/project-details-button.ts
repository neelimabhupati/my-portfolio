import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  imports: [RouterLink, TranslatePipe ],
  selector: 'app-project-details-button',
  styleUrl: './project-details-button.scss',
  templateUrl: './project-details-button.html',
})
export class ProjectDetailsButton {
  @Input({ required: true } )projectId!: string;
}
