import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appDisableCutCopyPaste]',
  standalone: true
})
export class DisableCutCopyPasteDirective {

  constructor() { }

  @HostListener('paste', ['$event']) disablePaste(e: KeyboardEvent) {
    e.preventDefault();
  }

  @HostListener('copy', ['$event']) disableCopy(e: KeyboardEvent) {
    e.preventDefault();
  }

  @HostListener('cut', ['$event']) disableCut(e: KeyboardEvent) {
    e.preventDefault();
  }

}
