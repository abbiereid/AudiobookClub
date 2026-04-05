import { Component, OnInit } from "@angular/core";
import { AccountService } from "../../../services/account-api-service";
import { SpotifyApiService } from "../../../services/spotify-api-service";
import { ActivatedRoute, Router } from "@angular/router";
import { switchMap } from "rxjs";

@Component({
    selector: "login-callback",
    templateUrl: "./callback.html",
    styleUrl: "./callback.scss",
    standalone: true,
    imports: []
}) export class LoginCallbackComponent implements OnInit {
    constructor(
        private accountService: AccountService,
        private spotifyApiService: SpotifyApiService,
        private activatedRoute: ActivatedRoute,
        private router: Router,
    ){}

    ngOnInit() {
        const code = this.activatedRoute.snapshot.queryParams['code'];
        if(!code) {
            //Need to handle this and other errorsbetter, also should start using mat snackbars for errors and notifications
            //Just for now
            console.error("No code provided in callback");
            return;
        }

        this.spotifyApiService.loginToSpotify(code).pipe(switchMap(() => this.accountService.getUser())).subscribe({
            next: () => {
                this.router.navigate(['/']); //Want to make a route service so that we can just call methods and have one source of truth for routes.
            },
            error: (error) => {
                console.error("Error fetching user", error);
            }
        });
    }
}