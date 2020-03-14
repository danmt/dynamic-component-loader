import {
  Injectable,
  ComponentFactoryResolver,
  ViewContainerRef
} from '@angular/core';
import { from } from 'rxjs';
import { map } from 'rxjs/operators';

export interface ComponentLoader {
  loadChildren: () => Promise<any>;
}

@Injectable({
  providedIn: 'root'
})
export class AppService {
  constructor(private cfr: ComponentFactoryResolver) {}

  forChild(vcr: ViewContainerRef, cl: ComponentLoader) {
    return from(cl.loadChildren()).pipe(
      map((component: any) => this.cfr.resolveComponentFactory(component)),
      map(componentFactory => vcr.createComponent(componentFactory))
    );
  }
}
