import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { User } from '../schemas/User';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Userservice{
 public users: User | null = null;

  constructor(private http:HttpClient) {}

  getUserse(){
return this.http.get(`${environment.api}/users`,).pipe(
  map(
    (response:any) =>{
this.users=response.data
return response.data;
    }
  ));
  }
  getUsers(){
    return this.http.get(`${environment.api}/users`,).pipe(
      map(
        (response:any) =>{
    this.users=response.data
    return response.data;
        }
      ));
      }
}
