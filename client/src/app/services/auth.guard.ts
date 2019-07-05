import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { WebServiceService } from './web-service.service';

@Injectable({providedIn: 'root'})
 export class AuthGuard implements CanActivate {
     constructor(private router: Router, private authService: WebServiceService) {}

     canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if (this.authService.isAuthenticated()) {
          // check if route is restricted by role isAdmin
          if (route.data.roles && route.data.roles.indexOf(this.authService.credentials.data.userData.isAdmin) === -1) {
            // role not authorized so redirect to home page
            this.router.navigate(['/login']);
            return false;
          }
          // authorized so return true
          return true;
        }
        this.router.navigate(['/'], { queryParams: { redirect: state.url }, replaceUrl: true });
        return false;
     }

 }
