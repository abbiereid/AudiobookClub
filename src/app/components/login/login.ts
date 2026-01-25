import { Component } from "@angular/core";
import { MatCardModule } from "@angular/material/card";

@Component({
    selector: "login",
    templateUrl: "./login.html",
    styleUrl: "./login.scss",
    standalone: true,
    imports: [
        MatCardModule,
    ]
}) export class Login {
    
}