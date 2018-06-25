import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppMainComponent } from './main-container.component';
import { UiTestComponent } from './ui-test.component';
import { UiDirective } from './ui.directive';
import { UiButtonComponent } from '../ui/ui-button.component';
import { UiComponent } from './ui.component';

@NgModule({
  declarations: [
    AppComponent,
    AppMainComponent,
    UiDirective,
    UiTestComponent,
    UiButtonComponent
  ],
  entryComponents: [UiTestComponent, UiButtonComponent],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
