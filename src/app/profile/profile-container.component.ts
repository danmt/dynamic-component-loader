import { Component, OnInit, ViewChild } from '@angular/core';
import { ProfileHostDirective } from './profile-host.directive';
import { ProfileService } from './profile.service';
import { mergeMap } from 'rxjs/operators';

@Component({
  selector: 'app-profile-container',
  template: `
    <section>
      <h3>Profile</h3>
      <ng-template appProfileHost></ng-template>
    </section>
  `
})
export class ProfileContainerComponent implements OnInit {
  @ViewChild(ProfileHostDirective, { static: true })
  profileHost: ProfileHostDirective;

  constructor(private profileService: ProfileService) {}

  ngOnInit() {
    const viewContainerRef = this.profileHost.viewContainerRef;

    this.profileService.isLoggedIn$
      .pipe(
        mergeMap(isLoggedIn =>
          this.profileService.loadComponent(viewContainerRef, isLoggedIn)
        )
      )
      .subscribe();
  }
}
