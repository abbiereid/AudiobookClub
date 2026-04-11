import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AccountService } from './services/account-api-service';
import { MenuComponent } from './components/menu/menu';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    MenuComponent,
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  constructor(
    public accountService: AccountService,
  ){}
}
