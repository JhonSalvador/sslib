import { Component } from '@angular/core';
import { PROFILE } from '../../data/portfolio';

@Component({
  selector: 'app-footer',
  standalone: true,
  templateUrl: './footer.html',
})
export class Footer {
  profile = PROFILE;
  currentYear = new Date().getFullYear();
}