import { Component, Renderer2, ElementRef } from '@angular/core';

export const getComponent = (backgroundColor: string, color: string) => {
  @Component({
    selector: 'app-colored',
    template: 'Colored',
    styles: [
      `
        :host {
          display: block;
          margin: 1rem;
          padding: 1rem;
          border: 1px solid black;
        }
      `
    ]
  })
  class ColoredComponent {
    constructor(hostElement: ElementRef, renderer: Renderer2) {
      renderer.setStyle(
        hostElement.nativeElement,
        'background-color',
        backgroundColor
      );
      renderer.setStyle(hostElement.nativeElement, 'color', color);
    }
  }

  return ColoredComponent;
};
