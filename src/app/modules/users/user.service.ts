import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url = 'https://localhost:8000/api/admin/';

  private routePrefix: string = 'users';

  constructor(private http: HttpClient) { }

  findAll() {
    return this.http.get(this.getRoutePrefixWithSlash());
  }

  findOneById(id: number) {
    return this.http.get(this.getRoutePrefixWithSlash() + id);
  }

  create(profil: User) {
    return this.http.post(this.getRoutePrefixWithSlash(), profil);
  }

  update(profil: User) {
    return this.http.put(this.getRoutePrefixWithSlash() + profil.id, profil);
  }

  remove(profil: User) {
    return this.http.delete(this.getRoutePrefixWithSlash() + profil.id);
  }

  private getRoutePrefixWithSlash(): string {
    return this.url + this.routePrefix + '/';
  }
}
