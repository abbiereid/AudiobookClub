import { Component } from "@angular/core";
import {MatSidenavModule} from '@angular/material/sidenav';

@Component({
    selector: "menu",
    templateUrl: "./menu.html",
    styleUrl: "./menu.scss",
    standalone: true,
    imports: [
        MatSidenavModule,
    ]
}) export class MenuComponent {

}