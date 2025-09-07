import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UsersService } from 'src/app/data/services/users.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { smoothScrollTo } from 'src/utils';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public registerForm = this.fb.group({
    nom: ['', Validators.required],
        prenom: ['', Validators.required],
    numero: ['', Validators.required],

    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(4)]],
    password_confirmation: ['', Validators.required],
    profilNom: ['lecteur'] // valeur par défaut
  });

  hide = true; // pour le toggle password
  showPassword = false;

  constructor(
    private fb: FormBuilder,
    private userService: UsersService,
    private toastr: ToastrService,
    private router: Router
  ) {}

  ngOnInit(): void {
    smoothScrollTo();
  }

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  onRegister(): void {
    if (this.registerForm.valid) {
      const { password, password_confirmation } = this.registerForm.value;

      if (password !== password_confirmation) {
        this.toastr.error("Les mots de passe ne correspondent pas");
        return;
      }

      const userData = this.registerForm.getRawValue();

      this.userService.create(userData).subscribe({
        next: (res: any) => {
          if ('error' in res) {
            this.toastr.error(res.message || "Erreur lors de l'inscription");
            return;
          }

          Swal.fire({
            title: 'Compte créé avec succès !',
            text: 'Bienvenue dans la bibliothèque',
            icon: 'success',
            confirmButtonText: 'OK'
          });

          this.registerForm.reset();
          this.router.navigate(['/login']);
        },
        error: (err) => {
          console.error(err);
          this.toastr.error("Erreur lors de l'inscription");
        }
      });
    } else {
      this.toastr.warning("Veuillez remplir correctement le formulaire");
    }
  }
}
