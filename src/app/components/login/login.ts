import { Component } from "@angular/core";
import { MatCardModule } from "@angular/material/card";
import {MatButtonModule} from '@angular/material/button';
import { IconService } from "../../services/icon.service";
import { MatIcon } from "@angular/material/icon";
import { environment } from "../../../environments/environment";

@Component({
    selector: "login",
    templateUrl: "./login.html",
    styleUrl: "./login.scss",
    standalone: true,
    imports: [
    MatCardModule,
    MatButtonModule,
    MatIcon
]
}) export class LoginComponent {

    private baseAuthUrl = 'https://accounts.spotify.com/authorize?';

    constructor(
        public iconService: IconService,
    ) {}
    login() {
        window.location.href = this.baseAuthUrl + new URLSearchParams({
            client_id: environment.clientId,
            redirect_uri: environment.spotifyRedirectUrl,
            response_type: 'code'
        }).toString();
    }
}