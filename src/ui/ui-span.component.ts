import { Component, Input, ComponentRef, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';
import { UiComponent } from '../app/ui.component';

@Component({
    template: `
      <span>label</span>
  `
})
export class UiSpanComponent extends UiComponent {
}