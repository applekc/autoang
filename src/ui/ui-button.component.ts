import { Component, Input, ComponentRef, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';
import { UiComponent } from '../app/ui.component';

@Component({
    template: `
      <button>hello button</button>
  `
})
export class UiButtonComponent extends UiComponent {
}