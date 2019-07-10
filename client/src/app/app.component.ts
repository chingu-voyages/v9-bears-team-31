import {
  Component,
  ChangeDetectorRef,
  EventEmitter,
  Output,
  OnInit} from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { MatSidenav, MatSnackBar } from '@angular/material';
import { IosInstallComponent } from './ios-install/ios-install.component';
import { slideInAnimation } from './app.animation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [slideInAnimation]
})
export class AppComponent implements OnInit {
  title = 'Safari Buddy';
  mobileQuery: MediaQueryList;
  nav = [
    {
      title: 'Home',
      path: '/'
    },
    {
      title: 'Login',
      path: '/login'
    },
    {
      title: 'Register',
      path: '/register'
    },
    {
      title: 'Dashboard',
      path: '/dashboard'
    }
  ];
// tslint:disable-next-line: variable-name
  private _mobileQueryListener: () => void;
  @Output() toggleSideNav = new EventEmitter();

  constructor( changeDetectorRef: ChangeDetectorRef, media: MediaMatcher, private toast: MatSnackBar) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnInit(): void {
    // Detects if device is on iOS
    const isIos = () => {
      const userAgent = window.navigator.userAgent.toLowerCase();
      return /iphone|ipad|ipod/.test( userAgent );
    };
    // Detects if device is in standalone mode
    const isInStandaloneMode = () => ('standalone' in (window as any).navigator) && ((window as any).navigator.standalone);

    // Checks if should display install popup notification:
    if (isIos() && !isInStandaloneMode()) {
      this.toast.openFromComponent(IosInstallComponent, {
        duration: 8000,
        horizontalPosition: 'start',
        panelClass: ['mat-elevation-z3']
      });
    }
  }

  toggleMobileNav(nav: MatSidenav) {
    if (this.mobileQuery.matches) {
      nav.toggle();
    }
  }
}
