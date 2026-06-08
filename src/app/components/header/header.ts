import { Component, HostListener } from '@angular/core';
import { PROFILE } from '../../data/portfolio';

type MenuItem = {
  label: string;
  target: string;
};

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  profile = PROFILE;
  isScrolled = false;

  menuItems: MenuItem[] = [
    {
      label: 'Início',
      target: 'home',
    },
    {
      label: 'Sobre',
      target: 'sobre',
    },
    {
      label: 'Vellarum',
      target: 'vellarum',
    },
    {
      label: 'Tecnologias',
      target: 'tecnologias',
    },
    {
      label: 'Projetos',
      target: 'projetos',
    },
    {
      label: 'Experiências',
      target: 'experiencias',
    },
    {
      label: 'Contato',
      target: 'contato',
    },
  ];

  @HostListener('window:scroll')
  onWindowScroll(): void {
    this.isScrolled = window.scrollY > 980;
  }

  scrollToSection(sectionId: string): void {
    if (sectionId === 'home') {
      this.scrollToTop();
      return;
    }

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

  scrollToTop(): void {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }
}