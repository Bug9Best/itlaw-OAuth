import { Component, OnInit, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { SocialAuthService, GoogleLoginProvider, FacebookLoginProvider, SocialUser } from '@abacritt/angularx-social-login';
import { AuthService } from '../../service/auth/auth.service';

declare const FB: any;

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  user?: any;
  loggedIn?: boolean;

  constructor(
    private router: Router,
    private authSocial: SocialAuthService,
    private authService: AuthService,
  ) {
  }

  ngOnInit(): void {
    this.authSocial.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = (user != null);
    });

    this.authService.getLoginStatus().subscribe((data) => {
      this.loggedIn = data;
    });

    (window as any).fbAsyncInit = function () {
      FB.init({
        appId: '297110276439186',
        cookie: false,
        xfbml: true,
        version: 'v3.1'
      });
      FB.AppEvents.logPageView();
    };

    (function (d, s, id) {
      var js: any, fjs: any = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) { return; }
      js = d.createElement(s); js.id = id;
      js.src = "https://connect.facebook.net/en_US/sdk.js";
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
  }

  loginCredential() {

  }

  loginWithFacebook() {
    FB.login((response: any) => {
      if (response.authResponse) {
        FB.api('/me', { fields: 'name, email, picture' }, (response: any) => {
          this.user = {
            id: response.id,
            provider: FacebookLoginProvider.PROVIDER_ID,
            email: response.email || '',
            name: response.name,
            photoUrl: response.picture.data.url
          };
          this.authService.setLoginStatus(true);
          this.router.navigate(['/']);
        });
      } else {
        console.log('User cancelled login or did not fully authorize.');
      }
    });
  }

  loginWithGithub() {
    this.authSocial.signIn(GoogleLoginProvider.PROVIDER_ID);
  }

  signOut(): void {
    this.authSocial.signOut();
    this.loggedIn = false;
  }
}