import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { JOBS, STUDIES } from '../../data/portfolio';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.html',
})
export class Experience {
  jobs = JOBS;
  studies = STUDIES;
}
