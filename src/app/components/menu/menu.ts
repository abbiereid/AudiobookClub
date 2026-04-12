import { Component, signal } from "@angular/core";
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import { AccountService } from "../../services/account-api-service";
import { RouterOutlet } from "@angular/router";

@Component({
    selector: "menu",
    templateUrl: "./menu.html",
    styleUrl: "./menu.scss",
    standalone: true,
    imports: [
        MatSidenavModule,
        MatToolbarModule,
        RouterOutlet,
    ]
}) export class MenuComponent {
    constructor(
        public accountService: AccountService,
    ) {}
    sideNavMode = signal("side");
}