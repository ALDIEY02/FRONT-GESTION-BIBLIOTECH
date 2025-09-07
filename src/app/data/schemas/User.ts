// export interface User {
//     id: number;
//     name: string;
//     profile?: string;
//     matricule: string;
//     email: string;
//     roles: string[];
//    // teacher: TeacherInfos | null;
//   }

import { Profil } from "./Role";


 
export interface User {
    id: number;
    email: string;
    profil?:string
    name: string;
    role: Profil;
  }
  