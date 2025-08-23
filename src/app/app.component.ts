import { Component, OnInit } from '@angular/core';
import { AuthService } from './data/services/auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'travel_solutions';

  constructor(public authService: AuthService) {}

  ngOnInit() {}
}
