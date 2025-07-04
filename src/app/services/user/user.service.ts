import { inject, Injectable } from '@angular/core';
import { ApiService } from '../api/api.service';
import { Credentials, User } from './types';

@Injectable({
  providedIn: 'root'
})
export class UserService {
    private _api = inject(ApiService);

    getMe() {
        return this._api.getMe<User>();
    }

    login(credentials: Credentials) {
        return this._api.login<User>(credentials);
    }

    logout() {
        return this._api.logout()
    }
}
