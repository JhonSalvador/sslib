import { Component,  HostListener } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
  ],
  templateUrl: './app.html',
  styleUrl: './app.css',
})

export class App {

  @HostListener('document:contextmenu', ['$event'])
  blockRightClick(event: MouseEvent): void {
    event.preventDefault();
  }

  @HostListener('document:dragstart', ['$event'])
  blockDrag(event: DragEvent): void {
    event.preventDefault();
  }

  @HostListener('document:selectstart', ['$event'])
  blockSelection(event: Event): void {
    const target = event.target as HTMLElement;

    if (
      target.tagName === 'INPUT' ||
      target.tagName === 'TEXTAREA' ||
      target.isContentEditable
    ) {
      return;
    }

    event.preventDefault();
  }

  @HostListener('document:keydown', ['$event'])
  blockDevToolsShortcuts(event: KeyboardEvent): void {
    const key = event.key.toLowerCase();

    const isF12 = event.key === 'F12';

    const isInspect =
      event.ctrlKey &&
      event.shiftKey &&
      ['i', 'j', 'c'].includes(key);

    const isViewSource =
      event.ctrlKey &&
      key === 'u';

    const isSavePage =
      event.ctrlKey &&
      key === 's';

    if (isF12 || isInspect || isViewSource || isSavePage) {
      event.preventDefault();
      event.stopPropagation();
    }
  }
}