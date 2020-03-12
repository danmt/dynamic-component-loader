import { Component } from '@angular/core';
import { ProfileService } from './profile.service';

@Component({
  selector: 'app-client-profile',
  template: 'Client Profile <button (click)="logout()">Log Out</button>'
})
export class ClientProfileComponent {
  constructor(private profileService: ProfileService) {}

  logout() {
    this.profileService.logout();
  }
}
