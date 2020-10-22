import { Directive, ElementRef, Renderer2, OnInit } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]',
})
export class BetterHighlightDirective implements OnInit {
  constructor(private El: ElementRef, private renderer2: Renderer2) {}
  ngOnInit() {
    this.renderer2.setStyle(this.El.nativeElement, 'backgroundColor', 'blue');
    let nd = this.renderer2.createText('Cybersoft Academy');
    this.renderer2.appendChild(this.El.nativeElement, nd);
  }
}
