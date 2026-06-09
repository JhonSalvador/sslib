import { Component } from '@angular/core';
import { PROFILE } from '../../data/portfolio';

@Component({
  selector: 'app-hero',
  imports: [],
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})
export class Hero {
  profile = PROFILE;

  scrollToProjects(): void {
    this.scrollToSection('projetos');
  }

  scrollToContact(): void {
    this.scrollToSection('contato');
  }

  private scrollToSection(sectionId: string): void {
    const section = document.getElementById(sectionId);

    if (!section) {
      return;
    }

    const headerOffset = 90;
    const sectionPosition = section.getBoundingClientRect().top + window.scrollY;
    const offsetPosition = sectionPosition - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth',
    });
  }
}
