import { UiComponent } from "./ui.component";
import { ComponentRef } from "@angular/core";

export class UiContainer extends UiComponent {
    public components: ComponentRef<any>[] = [];
    
    add(componentFactoryResolver, vc, com) {
        let componentFactory = componentFactoryResolver.resolveComponentFactory(com);

        let componentRef = vc.createComponent(componentFactory);
        this.components.push(componentRef);
    }
}