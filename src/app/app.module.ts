import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileHostDirective } from './profile/profile-host.directive';
import { ProfileContainerComponent } from './profile/profile-container.component';

@NgModule({
  declarations: [AppComponent, ProfileHostDirective, ProfileContainerComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
