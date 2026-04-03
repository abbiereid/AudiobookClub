import { Injectable } from "@angular/core";
import { environment } from "../../environments/environment";
import { HttpClient } from "@angular/common/http";

@Injectable({
    providedIn: "root"
})
export class SpotifyApiService {
    private baseUrl = environment.apiUrl;

    constructor(
        public httpClient: HttpClient,
    ) {}

    loginToSpotify(code: string) {
        return this.httpClient.post(`${this.baseUrl}/spotify/login`, {
            grant_type: "authorization_code",
            code: code,
            redirect_uri: environment.spotifyRedirectUrl,
        })
    }
}