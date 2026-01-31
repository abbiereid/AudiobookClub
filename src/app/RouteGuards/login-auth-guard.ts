import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from "@angular/router";
import { AccountService } from "../services/account-api-service";
import { Router } from "@angular/router";

@Injectable({
    providedIn: 'root'
})
export class LoginAuthGuard implements CanActivate {
    constructor(
        public accountService: AccountService,
        public router: Router,
    ){}
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if(this.accountService.isLoggedIn()) {
            return true;
        }
        this.router.navigate(['login']);
        return false;
    }
}