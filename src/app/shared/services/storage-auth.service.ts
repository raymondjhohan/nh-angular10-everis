import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageAuthService {

  storageKey = 'sessionToken';
  constructor() { }

  setToken(token: string) {
    localStorage.setItem(this.storageKey, token);
  }

  getToken(): string | null {
    return localStorage.getItem(this.storageKey)
  }
}
