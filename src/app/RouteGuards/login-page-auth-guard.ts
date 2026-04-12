import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, GuardResult, MaybeAsync, RedirectCommand, Router, RouterStateSnapshot } from "@angular/router";
import { AccountService } from "../services/account-api-service";

@Injectable({
    providedIn: 'root'
}) export class LoginPageAuthGuard implements CanActivate {
    constructor(
        private readonly accountService: AccountService,
        private readonly router: Router,
    ) {}
    canActivate() {
        if(!this.accountService.isLoggedIn()) {
            return true;
        }
        return new RedirectCommand(this.router.createUrlTree(['/']));
    }
}