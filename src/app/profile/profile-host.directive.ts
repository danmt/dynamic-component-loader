import { Directive, ViewContainerRef } from '@angular/core';

@Directive({ selector: '[appProfileHost]' })
export class ProfileHostDirective {
  constructor(public viewContainerRef: ViewContainerRef) {}
}
