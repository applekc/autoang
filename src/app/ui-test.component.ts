import { Component, Input, ComponentRef, ViewContainerRef, ComponentFactoryResolver, ViewChild } from '@angular/core';
import { UiButtonComponent } from '../ui/ui-button.component';
import { UiContainer } from './ui.container';

@Component({
    template: `
    <div class="job-ad">
      <h4>{{data.headline}}</h4>

      {{data.body}}
      <button (click)="add()">add</button>
      <ng-template #vc></ng-template>
    </div>
  `
})
export class UiTestComponent extends UiContainer {
    @ViewChild("vc", { read: ViewContainerRef }) vc: ViewContainerRef;

    constructor(public componentFactoryResolver: ComponentFactoryResolver) {
        super();
    }

    add() {
        super.add(this.componentFactoryResolver, this.vc, UiButtonComponent);
    }
}