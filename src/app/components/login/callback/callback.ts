import { Component, OnInit } from "@angular/core";
import { AccountService } from "../../../services/account-api-service";

@Component({
    selector: "login-callback",
    templateUrl: "./callback.html",
    styleUrl: "./callback.scss",
    standalone: true,
    imports: []
}) export class LoginCallbackComponent implements OnInit {
    constructor(
        public accountService: AccountService,
    ){}

    ngOnInit() {
        //Use code, send to api and perform proper login
        //Set to logged in if successful, this should be computed properly with tokens, but this is fine for now/simulation.
        this.accountService.isLoggedIn.set(true);
    }
}