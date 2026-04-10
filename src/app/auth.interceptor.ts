import { HttpInterceptorFn } from "@angular/common/http";
import { catchError } from "rxjs";
import { AccountService } from "./services/account-api-service";
import { inject } from "@angular/core";
import { Router } from "@angular/router";

export const authInterceptor: HttpInterceptorFn = (req, next) => {
    const accountService = inject(AccountService);
    const router = inject(Router);

    const addedCredentialsReq = req.clone({
        withCredentials: true
    });

    return next(addedCredentialsReq).pipe(
        catchError((error) => {
            if (error.status === 401) {
                accountService.clearUser();
                router.navigate(['/login']);
            }
            throw error;
        })
    );
}