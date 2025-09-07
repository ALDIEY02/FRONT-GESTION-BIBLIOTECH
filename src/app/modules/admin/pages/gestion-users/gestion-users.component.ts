import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faAdd, faSearch } from '@fortawesome/free-solid-svg-icons';
import { User } from 'src/app/data/schemas/User';
import { UsersService } from 'src/app/data/services/users.service';
import { smoothScrollTo } from 'src/utils';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-gestion-users',
  templateUrl: './gestion-users.component.html',
  styleUrl: './gestion-users.component.css'
})
export class GestionUsersComponent  implements OnInit {
  value!: '';
  users: User[] = [];
  public icon = {
    faSearch,
    faAdd,
  };
  public modal = {
    showAddModal: false,
  };
  public classes: User[] = [];
  public pagination = {
    currentPage: 1,
    totalItems: 0,
    itemsPerPage: 5,
    loading: false,
  };
  public searchTerm = '';

  constructor(public userservice: UsersService,    public router: Router
    ) {


      
    }
  
ngOnInit(): void {
  this.loadUsers();
  
}

onKey(event: KeyboardEvent) {
  // with type info
  this.value += (event.target as HTMLInputElement).value + ' | ';
  
  
}
getPage(page: number) {
  this.pagination.loading = true;
  this.userservice
    .getAll({
      page: page,
      limit: this.pagination.itemsPerPage,
      name: this.searchTerm,
    })
    .subscribe((res) => {
      if ('error' in res) return;

      this.classes = res.data;
      this.pagination.loading = false;
      this.pagination.currentPage = res.pagination?.currentPage || 1;
      this.pagination.totalItems = res.pagination?.total || 0;
      this.pagination.loading = false;
    });
}
loadUsers(){
  smoothScrollTo()
  this.userservice
    .getAll({ limit: this.pagination.itemsPerPage })
    .subscribe((res) => {
      if ('error' in res) return console.log(res);

      this.classes = res.data;

      this.pagination.currentPage = res.pagination?.currentPage || 1;
      this.pagination.totalItems = res.pagination?.total || 0;
    });
  
}
delete(id: number){
this.userservice.delete(id).subscribe(data =>{
  Swal.fire({
    title: "utilisateur supprimer avec succes!",
    text: "!",
    icon: "success"
  });
 this.loadUsers();
})

  
}


search(e: Event) {
  const value = (e.target as HTMLInputElement).value;
  this.searchTerm = value;

  if (value === '') this.getPage(1);
}

onSearch(e: KeyboardEvent) {
  if (e.key === 'Enter' && this.searchTerm.trim() != '') this.getPage(1);
}
}