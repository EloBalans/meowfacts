import {computed, Injectable, signal} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public loggedUser = signal<string | null>(null);

  public isLoggedIn = computed(()=>{
    return this.loggedUser() !== null;
  })

  public login(name: string) {
    this.loggedUser.set(name);
  }

  public logout() {
    this.loggedUser.set(null);
  }
}
