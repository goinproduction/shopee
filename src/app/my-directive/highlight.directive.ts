import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
})
export class HighlightDirective implements OnInit {
  constructor(private El: ElementRef) {}
  ngOnInit() {
    this.El.nativeElement.style.backgroundColor = 'green';
  }
}
