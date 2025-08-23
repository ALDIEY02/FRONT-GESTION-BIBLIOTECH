import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/data/schemas/User'; // Importer le modèle User si nécessaire
import { RoleService } from 'src/app/data/services/role.service';
import { Role } from 'src/app/data/schemas/Role';
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
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
    password_confirmation: ['', Validators.required],
    role_id: ['', Validators.required]
  });
  roles: Role[] = [];
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
    this.roleService.getAll({}).subscribe((res) => {
      if ('error' in res) return 
     

      this.roles = res.data;

      console.log(this.roles);
      
    });
      (error:any) => {
        console.error('Erreur lors de la récupération des rôles :', error);
      }
    

    
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
