import { Component } from '@angular/core';
import { CONTACT } from '../../data/portfolio';

@Component({
  selector: 'app-contact',
  standalone: true,
  templateUrl: './contact.html',
})
export class Contact {
  contact = CONTACT;
}
