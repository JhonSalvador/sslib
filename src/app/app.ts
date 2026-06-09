import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { Header } from './components/header/header';
import { Hero } from './components/hero/hero';
import { About } from './components/about/about';
import { Skills } from './components/skills/skills';
import { Projects } from './components/projects/projects';
import { Experience } from './components/experience/experience';
import { Contact } from './components/contact/contact';
import { Footer } from './components/footer/footer';
import { CustomCursor } from './components/custom-cursor/custom-cursor';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    Header,
    Hero,
    About,
    Skills,
    Projects,
    Experience,
    Contact,
    Footer,
    CustomCursor,
  ],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {}
