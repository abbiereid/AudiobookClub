import { Injectable, signal } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class AccountService {
    public isLoggedIn = signal(false);
}