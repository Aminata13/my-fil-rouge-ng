import { UserProfil } from '../user-profils/user-profil-list/user-profil.model';

export class User {
  constructor(
    public id: number,
    public username: string,
    public password: string,
    public firstname?: string,
    public lastname?: string,
    public email?: string,
    public avatar?: any,
    public profil?: UserProfil
  ) {  }
}
