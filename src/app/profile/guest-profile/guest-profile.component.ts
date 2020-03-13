import { Component } from '@angular/core';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-guest-profile',
  templateUrl: './guest-profile.component.html'
})
export class GuestProfileComponent {
  constructor(private profileService: ProfileService) {}

  login() {
    this.profileService.login();
  }
}
