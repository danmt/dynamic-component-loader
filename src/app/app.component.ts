import { Component, ViewChild, ViewContainerRef } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild('container', { read: ViewContainerRef })
  containerRef: ViewContainerRef;

  constructor(private appService: AppService) {}

  push(color: string) {
    this.appService
      .forChild(this.containerRef, {
        loadChildren: () =>
          import('./colored/colored.component').then(m =>
            m.getComponent(color, 'white')
          )
      })
      .subscribe();
  }

  clear() {
    this.containerRef.clear();
  }
}
