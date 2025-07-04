import { Injectable } from '@angular/core';
import axios from 'axios';
import env from '../../../env';

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

    login<T>(data: { email: string; password: string }) {
        return this._api.post<T>(`${ApiService.AUTH}/login`, data);
    }

    logout() {
        return this._api.post(`${ApiService.AUTH}/logout`)
    }

    healthCheck() {
        this._api.get<void>(ApiService.HEALTH_CHECK);
    }
}
