import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/data/services/auth/auth.service';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css'],
})
export class UserCardComponent implements OnInit {
  public selectedSchoolYearId: string = '';
  public loadingYear = true;
  constructor(
    public authService: AuthService,
  ) {}

  ngOnInit(): void {
  }

 
  onSchoolYearChange(event: Event) {
    const schoolYearId = (event.target as HTMLSelectElement).value;
    this.selectedSchoolYearId = schoolYearId;
    localStorage.setItem('localSchoolYearId', schoolYearId);
    window.location.reload();
  }
}
