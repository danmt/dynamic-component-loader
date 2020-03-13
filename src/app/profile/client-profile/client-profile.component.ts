import { Component } from '@angular/core';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-client-profile',
  templateUrl: './client-profile.component.html'
})
export class ClientProfileComponent {
  constructor(private profileService: ProfileService) {}

  logout() {
    this.profileService.logout();
  }
}
