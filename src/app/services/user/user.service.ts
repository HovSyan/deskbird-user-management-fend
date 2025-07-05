import { inject, Injectable } from '@angular/core';
import { ApiService } from '../api/api.service';
import { CreateNewUser, Credentials, EditUser, User } from './types';

@Injectable({
  providedIn: 'root'
})
export class UserService {
    private _api = inject(ApiService);

    getMe() {
        return this._api.getMe<User>();
    }

    getAll() {
        return this._api.getAllUsers<User[]>()
    }

    registerUser(u: CreateNewUser) {
        return this._api.register<void>(u)
    }

    editUser(id: User['id'], u: EditUser) {
        return this._api.editUser<void>(id, u);
    }

    deleteUser(id: User['id']) {
        return this._api.deleteUser<void>(id);
    }

    login(credentials: Credentials) {
        return this._api.login<User>(credentials);
    }

    logout() {
        return this._api.logout()
    }
}
