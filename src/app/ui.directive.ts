import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[ui-host]',
})
export class UiDirective {
  constructor(public viewContainerRef: ViewContainerRef) { }
}