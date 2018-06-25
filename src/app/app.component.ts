import { Component, ViewChild } from '@angular/core';
import { AppMainComponent } from './main-container.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  @ViewChild(AppMainComponent) container:AppMainComponent;

  test(){
    this.container.loadComponent();
  }

  dump(){
    this.container.dump();
  }
}
