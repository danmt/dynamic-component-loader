import { Component } from '@angular/core';
import { ProfileService } from './profile.service';

@Component({
  selector: 'app-guest-profile',
  template: 'Guest Profile <button (click)="login()">Log In</button>'
})
export class GuestProfileComponent {
  constructor(private profileService: ProfileService) {}

  login() {
    this.profileService.login();
  }
}
