// Importez ElementRef et HostListener depuis @angular/core
import { Directive, HostListener, Renderer2, ElementRef } from '@angular/core';

@Directive({
  selector: '[appScroll]'
})
export class ScrollDirective {

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  @HostListener('window:scroll', []) onWindowScroll() {
    const scrollY = window.scrollY;
    const nav = this.el.nativeElement;
    if (scrollY > 0) {
      this.renderer.addClass(nav, 'scrolled');
    } else {
      this.renderer.removeClass(nav, 'scrolled');
    }
  }
}
