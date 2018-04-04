import { Component } from '@angular/core';
import { AuthenticationService } from './authentication/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AuthenticationService]
})
export class AppComponent {
  title = 'hipstarter';
  user;
  // private isLoggedIn: Boolean;
  // private userName: String;

  // constructor(public authService: AuthenticationService) {
  //   // this.authService.user.subscribe(user =>  {
  //   //   console.log(user);
  //   // });
  // }
  //
  // login() {
  //   this.authService.login();
  // }
  //
  // logout() {
  //   this.authService.logout();
  // }
}
