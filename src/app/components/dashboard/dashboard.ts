import { Component, OnInit, signal, WritableSignal } from "@angular/core";
import { AccountService } from "../../services/account-api-service";
import { SpotifyUser } from "../../models/SpotifyUser";

@Component({
    selector: "dashboard",
    templateUrl: "./dashboard.html",
    styleUrl: "./dashboard.scss",
    standalone: true,
    imports: []
}) export class DashboardComponent implements OnInit {
    constructor(
        public accountService: AccountService,
    ){}

    ngOnInit() {
    }
}