import { Injectable } from "@angular/core";
import { environment } from "../../environments/environment";
import { HttpClient } from "@angular/common/http";
import { SpotifyUser } from "../models/SpotifyUser";

@Injectable({
    providedIn: "root"
})
export class SpotifyApiService {
    private baseUrl = environment.apiUrl + "/Spotify";

    constructor(
        public httpClient: HttpClient,
    ) {}

    loginToSpotify(code: string) {
        return this.httpClient.post(`${this.baseUrl}/login`, {
            code: code,
            redirectUri: environment.spotifyRedirectUrl,
        })
    }

    getCurrentUser() {
        return this.httpClient.get<SpotifyUser>(`${this.baseUrl}/me`);
    }
}