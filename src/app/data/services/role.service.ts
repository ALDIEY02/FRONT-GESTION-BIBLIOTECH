import { Injectable } from '@angular/core';
import { ResApiService } from './res-api.service';
import { User } from '../schemas/User';
import { HttpClient } from '@angular/common/http';
export interface Role{
    id:number,
    libelle:string
    }
@Injectable({
  providedIn: 'root',
})


export class RoleService extends ResApiService<Role> {
    
  constructor(http: HttpClient) {
    super(http, 'roles');
  }
}
