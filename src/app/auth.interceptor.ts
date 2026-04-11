import { HttpInterceptorFn } from "@angular/common/http";
import { catchError } from "rxjs";
import { AccountService } from "./services/account-api-service";
import { inject } from "@angular/core";

export const authInterceptor: HttpInterceptorFn = (req, next) => {
    const accountService = inject(AccountService);

    const addedCredentialsReq = req.clone({
        withCredentials: true
    });

    return next(addedCredentialsReq).pipe(
        catchError((error) => {
            if (error.status === 401) {
                accountService.clearUser();
            }
            throw error;
        })
    );
}