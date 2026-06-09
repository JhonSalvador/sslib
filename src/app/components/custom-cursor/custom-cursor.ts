import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-custom-cursor',
  imports: [],
  templateUrl: './custom-cursor.html',
  styleUrl: './custom-cursor.css',
})
export class CustomCursor {
  x = 0;
  y = 0;

  isVisible = false;
  isHovering = false;
  isClicking = false;

  @HostListener('window:mousemove', ['$event'])
  onMouseMove(event: MouseEvent): void {
    this.x = event.clientX;
    this.y = event.clientY;
    this.isVisible = true;

    const target = event.target as HTMLElement | null;

    this.isHovering = !!target?.closest(
      'a, button, input, textarea, select, video, [data-cursor-hover]',
    );
  }

  @HostListener('window:mouseleave')
  onMouseLeave(): void {
    this.isVisible = false;
  }

  @HostListener('window:mousedown')
  onMouseDown(): void {
    this.isClicking = true;
  }

  @HostListener('window:mouseup')
  onMouseUp(): void {
    this.isClicking = false;
  }
}
