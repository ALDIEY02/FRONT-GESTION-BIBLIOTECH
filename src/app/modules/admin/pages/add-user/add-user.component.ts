import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/data/schemas/User'; // Importer le modèle User si nécessaire
import { RoleService } from 'src/app/data/services/role.service';
import { Profil } from 'src/app/data/schemas/Role';
import { UsersService } from 'src/app/data/services/users.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { smoothScrollTo } from 'src/utils';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  public addUserForm = this.fb.group({
    nom: ['', Validators.required],
        prenom: ['', Validators.required],
                numero: ['', Validators.required],


    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
    password_confirmation: ['', Validators.required],
    profilNom: ['', Validators.required]
  });
  roles: Profil[] = [];
  Profils:string[]=['admin','lecteur']
  showPassword = false;
  constructor(
    private fb: FormBuilder, 
    public roleService: RoleService,
    public userservice: UsersService,    
    private toast: ToastrService,
    private router: Router,
    ) {}

  ngOnInit() {
    smoothScrollTo()
  
    
  }
  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }
  onAddUser(): void {
    if (this.addUserForm.valid) {
      console.log(this.addUserForm.value);
      
      let userData = this.addUserForm.getRawValue();
      
      // Logique de validation des dates si nécessaire
      // Vous pouvez implémenter la méthode isValidateDates() si nécessaire
  
      // Logique de formatage des dates si nécessaire
  
      // Appel du service pour créer l'utilisateur
      this.userservice.create(userData).subscribe((res) => {
        if ('error' in res) {
          // Gestion des erreurs si nécessaire
          this.toast.error(res.message);
          return;
        }
        Swal.fire({
          title: "utilisateur ajouter avec succes!",
          text: "!",
          icon: "success"
        });
        // Réinitialisation du formulaire après la création de l'utilisateur
        this.addUserForm.reset();
  
        // Masquage du modal après la création de l'utilisateur
       this.modal.showAddUserModal = false;
  
        // Redirection vers la page appropriée après la création de l'utilisateur
        // Vous pouvez ajuster la redirection selon vos besoins
        this.router.navigate(['/admin/gestion-users']); // Exemple de redirection vers la liste des utilisateurs
      });
    }
  }
  modal = {
    showAddUserModal: true
  };
  goBack() {
    this.router.navigate(['/admin/gestion-users']);
  }

}
