import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  imports: [],
  selector: 'app-project-details',
  styleUrl: './project-details.scss',
  templateUrl: './project-details.html',
})
export class ProjectDetails {
  readonly projectId =
    inject(ActivatedRoute).snapshot.paramMap.get('id') ?? '';

}
