import { Injectable }     from '@angular/core';
import { CanActivate, 
  CanActivateChild, CanLoad, }    from '@angular/router';


@Injectable({providedIn: 'root'})
export class DefaultAuthGuard implements CanActivate, CanActivateChild, CanLoad {
  canActivate() {
    console.log('DefaultAuthGuard#canActivate called');
    return true;
  };
  canLoad() {
    console.log('DefaultAuthGuard#CanLoad called');
    return true;       
  }
  canActivateChild() {
    console.log('DefaultAuthGuard#canActivateChild called');
    return false;     
  }
}