import {Directive, ElementRef, HostBinding, HostListener, Renderer2} from '@angular/core';

@Directive({
  selector: '[appCardHover]'
})
export class CardHoverDirective {

  @HostBinding('class.card-hovered') private isHovering: boolean;

  constructor(private el: ElementRef, private renderer: Renderer2) {
  }

  @HostListener('mouseover') onMouseOver() {
    this.isHovering = true;
    this.update();
  }

  @HostListener('mouseout') onMouseOut() {
    this.isHovering = false;
    this.update();
  }

  private update() {
    const part = this.el.nativeElement.querySelector('.card-title');
    this.renderer.setStyle(part, 'backgroundColor', this.isHovering ? 'cyan' : 'white');
  }
}
