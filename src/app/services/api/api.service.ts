import { Injectable } from '@angular/core';
import axios from 'axios';
import env from '../../../env';
import { CreateNewUser, Credentials, EditUser, User } from '../user';

@Injectable({
    providedIn: 'root',
})
export class ApiService {
    static AUTH = '/api/v1/auth';
    static HEALTH_CHECK = '/healthz';
    static USER = '/api/v1/user';

    private _api = axios.create({
        baseURL: env.api_url,
        withCredentials: true,
    });

    getMe<T>() {
        return this._api.get<T>(`${ApiService.USER}/me`);
    }

    getAllUsers<T>() {
        return this._api.get<T>(`${ApiService.USER}`);
    }

    editUser<T>(id: User['id'], data: EditUser) {
        return this._api.post<T>(`${ApiService.USER}/${id}`, data);
    }

    deleteUser<T>(id: User['id']) {
        return this._api.delete<T>(`${ApiService.USER}/${id}`);
    }

    register<T>(data: CreateNewUser) {
        return this._api.post<T>(`${ApiService.AUTH}/register`, data);
    }

    login<T>(data: Credentials) {
        return this._api.post<T>(`${ApiService.AUTH}/login`, data);
    }

    logout() {
        return this._api.post(`${ApiService.AUTH}/logout`);
    }

    healthCheck() {
        return this._api.get<void>(ApiService.HEALTH_CHECK);
    }
}
