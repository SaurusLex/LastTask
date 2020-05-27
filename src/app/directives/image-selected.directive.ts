import { Directive, ElementRef, HostBinding, Sanitizer } from '@angular/core';
import { DomSanitizer, SafeStyle } from '@angular/platform-browser';

@Directive({
  selector: '[appImageSelected]'
})
export class ImageSelectedDirective {
  background;
  @HostBinding('style.background') bg: SafeStyle;
  constructor(private elRef: ElementRef, private sanitization:DomSanitizer) { }
  ngOnInit() {
   this.bg =this.sanitization.bypassSecurityTrustStyle(
    'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),url("../../../../../assets/img/fondo3.jpg")')

  }

}
