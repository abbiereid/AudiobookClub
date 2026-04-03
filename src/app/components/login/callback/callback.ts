import { Component, OnInit } from "@angular/core";
import { AccountService } from "../../../services/account-api-service";
import { SpotifyApiService } from "../../../services/spotify-api-service";
import { ActivatedRoute } from "@angular/router";

@Component({
    selector: "login-callback",
    templateUrl: "./callback.html",
    styleUrl: "./callback.scss",
    standalone: true,
    imports: []
}) export class LoginCallbackComponent implements OnInit {
    constructor(
        public accountService: AccountService,
        public spotifyApiService: SpotifyApiService,
        public activatedRoute: ActivatedRoute,
    ){}

    ngOnInit() {
        //Use code, send to api and perform proper login
        const code = this.activatedRoute.snapshot.paramMap.get("code");
        if(!code) {
            //Need to handle this better, also should start using mat snackbars for errors and notifications
            //Just for now
            console.error("No code provided in callback");
            return;
        }
        this.spotifyApiService.loginToSpotify(code).subscribe(() => {
            //Set to logged in if successful, this should be computed properly with tokens, but this is fine for now/simulation.
            this.accountService.isLoggedIn.set(true);
        });
    }
}