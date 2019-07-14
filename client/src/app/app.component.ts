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
import { WebServiceService } from './services';
import { Observable } from 'rxjs';
import { NavigationStart, NavigationEnd, NavigationCancel, NavigationError, Router, Event } from '@angular/router';

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
  authenticated = false;
  isLoggedIn$: Observable<boolean>;
  private _mobileQueryListener: () => void;
  @Output() toggleSideNav = new EventEmitter();
  loading: boolean;


  constructor(
    changeDetectorRef: ChangeDetectorRef,
    media: MediaMatcher,
    private toast: MatSnackBar,
    private webService: WebServiceService,
    private router: Router) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
    router.events.subscribe((routerEvent: Event) => {
      this.checkRouterEvent(routerEvent);
    });
  }

  ngOnInit(): void {
    // Add route
    this.isLoggedIn$ = this.webService.isLoggedIn;
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

  get user() {
    if (this.webService.isAuthenticated()) {
      return true;
    }
  }

  checkRouterEvent(routerEvent: Event): void {
    if (routerEvent instanceof NavigationStart) {
      this.loading = true;
    }

    if (routerEvent instanceof NavigationEnd ||
        routerEvent instanceof NavigationCancel ||
        routerEvent instanceof NavigationError) {
      this.loading = false;
    }
  }
}
