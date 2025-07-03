import { inject, Injectable } from '@angular/core';
import { ApiService } from '../api/api.service';
import { Credentials, LoginResponse, User } from './types';


@Injectable({
  providedIn: 'root'
})
export class UserService {
    private _api = inject(ApiService);

    login(credentials: Credentials) {
        return this._api.login<LoginResponse>(credentials);
    }
}
