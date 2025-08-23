import { Component } from '@angular/core';
import { AuthService } from 'src/app/data/services/auth/auth.service';
//import { ToastrService } from 'ngx-toastr';
import { catchError, of } from 'rxjs';
import { FormBuilder, FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
 
})

export class LoginComponent {
  public loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(4)]],
  });
 
hide=true;
isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
  const isSubmitted = form && form.submitted;
  return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
}
  constructor(
   private authService: AuthService,
  // private toast: ToastrService,
    private fb: FormBuilder,
    private router: Router
  ) {}

//   onSubmit() {
//     this.authService
//       .login(
//         this.loginForm.getRawValue() as { email: string; password: string }
//       )
//       .pipe(
       
//       )
//       .subscribe((user) => {
//         if (!user) return;
// //console.log(user);

//         this.router.navigate(['/']);
//       });
      
//   }
onSubmit() {
  const { email, password } = this.loginForm.getRawValue();

  this.authService.login({ email, password }).subscribe((user) => {
    if (!user) {
      alert('Email ou mot de passe incorrect');
      return;
    }

    const role = user.role.libelle;

    if (role === 'admin') {
      this.router.navigate(['/admin']);
    } else if (role === 'lecteur') {
      this.router.navigate(['/lecteur']);
    } else {
      this.router.navigate(['/']);
    }
  });
}

}
