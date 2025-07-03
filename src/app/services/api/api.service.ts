import { Injectable } from '@angular/core';
import axios from 'axios';
import env from '../../../env';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
    static AUTH = '/api/v1/auth';

    private _api = axios.create({
        baseURL: env.api_url,
    })

    login<T>(data: { email: string; password: string}) {
        return this._api.post<T>(`${ApiService.AUTH}/login`, data);
    }

    healthCheck() {
        // TODO
    }
}
