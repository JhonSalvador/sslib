import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SKILLS } from '../../data/portfolio';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.html',
})
export class Skills {
  skills = SKILLS;
}