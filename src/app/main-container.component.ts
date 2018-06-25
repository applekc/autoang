import { Component, Input, OnInit, ViewChild, ComponentFactoryResolver, OnDestroy, Type, ComponentRef } from '@angular/core';
import { UiComponent } from './ui.component';
import { UiDirective } from './ui.directive';
import { UiTestComponent } from './ui-test.component';
import { UiContainer } from './ui.container';

@Component({
  selector: 'app-main-container',
  template: `
              <div>
                <h3>dynamic loader</h3>
                <ng-template ui-host></ng-template>
              </div>
            `
})
export class AppMainComponent implements OnInit, OnDestroy {
  @ViewChild(UiDirective) uiHost: UiDirective;
  components: ComponentRef<any>[] = [];
  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit() {

  }

  ngOnDestroy() { }

  loadComponent(component: Type<any> = null) {

    let componentFactory = this.componentFactoryResolver.resolveComponentFactory(component || UiTestComponent);

    let viewContainerRef = this.uiHost.viewContainerRef;
    // viewContainerRef.clear();

    let componentRef = viewContainerRef.createComponent(componentFactory);
    (<UiComponent>componentRef.instance).data = {
      headline: 'test'+this.components.length,
      body: 'test component!'
    };
    this.components.push(componentRef);
    console.log(componentRef.componentType.name);
  }

  dump() {
    this.dumpInternal(this.components);
  }

  dumpInternal(children: ComponentRef<any>[]) {
    for (let i = 0; i < children.length; i++) {
      let c = children[i];
      console.log(c.componentType.name)
      if(c.instance instanceof UiContainer){
        this.dumpInternal((c.instance as UiContainer).components);
      }
    }
  }
}