import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { WEB_DEVELOPMENT_SKILLS } from '../../data/portfolio';
import { INFRASTRUCTURE_SKILLS } from '../../data/portfolio';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.html',
})
export class Skills {
  webSkills = WEB_DEVELOPMENT_SKILLS;
  infraSkills = INFRASTRUCTURE_SKILLS;
}
