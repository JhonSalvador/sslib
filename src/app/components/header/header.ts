import {
  Component,
  HostListener,
  Inject,
  OnDestroy,
  PLATFORM_ID,
  signal,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
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
export class Header implements OnDestroy {
  profile = PROFILE;

  isScrolled = signal(false);
  showContentLimit = signal(false);
  isMenuOpen = signal(false);

  private isBrowser = false;

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

  constructor(@Inject(PLATFORM_ID) private platformId: object) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  ngOnDestroy(): void {
    this.unlockBodyScroll();
  }

  @HostListener('window:scroll')
  onWindowScroll(): void {
    if (!this.isBrowser) {
      return;
    }

    this.isScrolled.set(window.scrollY > 980);

    const hero = document.getElementById('home');

    if (!hero) {
      this.showContentLimit.set(false);
      return;
    }

    const heroBottom = hero.offsetTop + hero.offsetHeight;
    this.showContentLimit.set(window.scrollY > heroBottom + 100);
  }

  toggleMenu(): void {
    const nextState = !this.isMenuOpen();

    this.isMenuOpen.set(nextState);

    if (nextState) {
      this.lockBodyScroll();
      return;
    }

    this.unlockBodyScroll();
  }

  closeMenu(): void {
    this.isMenuOpen.set(false);
    this.unlockBodyScroll();
  }

  scrollToSection(sectionId: string): void {
    if (!this.isBrowser) {
      return;
    }

    this.closeMenu();

    if (sectionId === 'home') {
      this.scrollToTop();
      return;
    }

    const section = document.getElementById(sectionId);

    if (!section) {
      return;
    }

    const headerOffset = 100;
    const sectionPosition = section.getBoundingClientRect().top + window.scrollY;
    const offsetPosition = sectionPosition - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth',
    });
  }

  scrollToTop(): void {
    if (!this.isBrowser) {
      return;
    }

    this.closeMenu();

    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }

  private lockBodyScroll(): void {
    if (!this.isBrowser) {
      return;
    }

    document.body.style.overflow = 'hidden';
  }

  private unlockBodyScroll(): void {
    if (!this.isBrowser) {
      return;
    }

    document.body.style.overflow = '';
  }
}