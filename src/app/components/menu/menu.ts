import { Component, signal } from "@angular/core";
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';

@Component({
    selector: "menu",
    templateUrl: "./menu.html",
    styleUrl: "./menu.scss",
    standalone: true,
    imports: [
        MatSidenavModule,
        MatToolbarModule,
    ]
}) export class MenuComponent {
    sideNavMode = signal("side");
}