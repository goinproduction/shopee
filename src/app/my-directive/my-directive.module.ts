import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlightDirective } from './highlight.directive';
import { BetterHighlightDirective } from './better-highlight.directive';
import { ButtonHoverDirective } from './button-hover.directive';

@NgModule({
  declarations: [
    HighlightDirective,
    BetterHighlightDirective,
    ButtonHoverDirective,
  ],
  imports: [CommonModule],
  exports: [HighlightDirective, BetterHighlightDirective, ButtonHoverDirective],
})
export class MyDirectiveModule {}
