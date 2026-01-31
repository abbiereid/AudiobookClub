import { Component } from "@angular/core";
import { MatCardModule } from "@angular/material/card";
import {MatButtonModule} from '@angular/material/button';
import { Router } from "@angular/router";
import { AccountService } from "../../services/account-api-service";

@Component({
    selector: "login",
    templateUrl: "./login.html",
    styleUrl: "./login.scss",
    standalone: true,
    imports: [
        MatCardModule,
        MatButtonModule
    ]
}) export class LoginComponent {
    constructor(
        private router: Router,
        private accountService: AccountService,
    ) {}
    login() {
        // Simulating login due to Spotifys current development pause.
        this.accountService.isLoggedIn.set(true);
        this.router.navigate(['']);
    }
}