import { Injectable } from "@angular/core";
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from "@angular/platform-browser";

@Injectable({
    providedIn: "root"
})
export class IconService {
    private icons : any[] = [
        { name: 'spotify', url: 'assets/icons/spotify.svg' }
    ];

    constructor(
        private iconRegistry: MatIconRegistry,
        private sanitizer: DomSanitizer,
    ) {
        this.registerIcons();
    }

    registerIcons() {
        this.icons.forEach(icon => {
            this.iconRegistry.addSvgIcon(icon.name, this.sanitizer.bypassSecurityTrustResourceUrl(icon.url));
        });
    }
}