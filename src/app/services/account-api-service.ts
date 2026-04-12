import { computed, Injectable, signal } from '@angular/core';
import { SpotifyApiService } from './spotify-api-service';
import { SpotifyUser } from '../models/SpotifyUser';
import { catchError, Observable, of, tap } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AccountService {
    constructor(
        public spotifyApiService: SpotifyApiService,
    ){}
    readonly isLoggedIn = computed(() => {
        return !!this.user();
    });
    private user = signal<SpotifyUser | null | undefined>(undefined);
    public readonly currentUser = this.user.asReadonly();

    public getUser(): Observable<SpotifyUser | null | undefined> {
        if(this.user() !== undefined) {
            return of(this.user());
        }
        return this.spotifyApiService.getCurrentUser().pipe(tap((user: SpotifyUser | null) => {
            this.user.set(user);
        }),
        catchError((error) => {
            console.error('Session expired', error);
            this.user.set(null);
            return of(null);
        })
    );
    }

    public clearUser() {
        this.user.set(null);
    }
}