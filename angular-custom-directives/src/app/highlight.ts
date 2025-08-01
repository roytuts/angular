import { Directive, ElementRef, HostListener, input } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone: false
})
export class HighlightDirective {

  appHighlight = input('');

  constructor(private el: ElementRef) {}

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.appHighlight() || 'red');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(''); // Remove highlight on mouse leave
  }

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }

}
