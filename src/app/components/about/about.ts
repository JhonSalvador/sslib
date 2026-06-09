import { Component } from '@angular/core';
import { PROFILE } from '../../data/portfolio';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {
  profile = PROFILE;
}
