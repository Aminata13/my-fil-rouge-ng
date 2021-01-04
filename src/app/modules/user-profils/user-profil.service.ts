import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserProfil } from './user-profil-list/user-profil.model';

@Injectable({
  providedIn: 'root'
})
export class UserProfilService {
  url = 'https://localhost:8000/api/admin/';

  private routePrefix: string = 'user_profils';

  constructor(private http: HttpClient) { }

  findAll() {
    return this.http.get(this.getRoutePrefixWithSlash());
  }

  findOneById(id: number) {
    return this.http.get(this.getRoutePrefixWithSlash() + id);
  }

  create(profil: UserProfil) {
    return this.http.post(this.getRoutePrefixWithSlash(), profil);
  }

  update(profil: UserProfil) {
    return this.http.put(this.getRoutePrefixWithSlash() + profil.id, profil);
  }

  remove(profil: UserProfil) {
    return this.http.delete(this.getRoutePrefixWithSlash() + profil.id);
  }

  private getRoutePrefixWithSlash(): string {
    return this.url + this.routePrefix + '/';
  }
}
