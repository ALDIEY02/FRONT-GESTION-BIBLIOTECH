import { Injectable } from '@angular/core';
import { User } from '../../schemas/User';
import { Observable, of } from 'rxjs';
import { Role } from '../../schemas/Role';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public user: User | null = null;
  public authChecking = true;

  constructor() {
    const savedUser = localStorage.getItem('user');
  if (savedUser) {
    this.user = JSON.parse(savedUser);
  }
  }

  login({ email, password }: { email: string | null; password: string | null }): Observable<User | null> {
    const roleAdmin = { id: 1, libelle: 'admin' };
    const roleLecteur = { id: 2, libelle: 'lecteur' };
  
    const mockAdmin: User = {
      id: 1,
      email: 'admin@biblio.com',
      name: 'Administrateur',
      role: roleAdmin,
    };
  
    const mockLecteur: User = {
      id: 2,
      email: 'lecteur@biblio.com',
      name: 'Lecteur Simple',
      role: roleLecteur,
    };
  
    if (email === 'admin@biblio.com' && password === 'admin') {
      this.user = mockAdmin;
      localStorage.setItem('token', 'fake-admin-token');
      localStorage.setItem('user', JSON.stringify(mockAdmin));
      return of(mockAdmin);
    }
  
    if (email === 'lecteur@biblio.com' && password === 'lecteur') {
      this.user = mockLecteur;
      localStorage.setItem('token', 'fake-lecteur-token');
      localStorage.setItem('user', JSON.stringify(mockLecteur));
      return of(mockLecteur);
    }
  
    return of(null); // Mauvais identifiants
  }

  getLoggedUser() {
    const token = localStorage.getItem('token');
    if (token === 'fake-admin-token') {
      this.user = {
        id: 1,
        email: 'admin@biblio.com',
        name: 'Administrateur',
        role: { id: 1, libelle: 'admin' },
      };
    } else if (token === 'fake-lecteur-token') {
      this.user = {
        id: 2,
        email: 'lecteur@biblio.com',
        name: 'Lecteur Simple',
        role: { id: 2, libelle: 'lecteur' },
      };
    } else {
      this.user = null;
    }

    this.authChecking = false;
    return of(this.user);
  }

  logout() {
    localStorage.removeItem('token');
  localStorage.removeItem('user');
  this.user = null;
  return of(true);
   
  }

  getToken() {
    return localStorage.getItem('token');
  }
}
