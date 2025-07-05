import {
    ApplicationConfig,
    importProvidersFrom,
    provideZoneChangeDetection,
} from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { providePrimeNG } from 'primeng/config';
import { provideEffects } from '@ngrx/effects';
import { provideRouter } from '@angular/router';
import Aura from '@primeuix/themes/aura';

import { routes } from './app.routes';
import { provideStore } from '@ngrx/store';
import { authReducer } from './state/auth/auth.reducers';
import { AuthEffects } from './state/auth/auth.effects';
import { usersListReducer } from './state/users-list/users-list.reducers';
import { UsersListEffects } from './state/users-list/users-list.effects';
import { UserEditEffects } from './state/user-edit/user-edit.effects';
import { userEditReducer } from './state/user-edit/user-edit.reducers';
import { NotificationEffects } from './state/notification/notification.effects';

export const appConfig: ApplicationConfig = {
    providers: [
        provideZoneChangeDetection({ eventCoalescing: true }),
        importProvidersFrom(BrowserAnimationsModule),
        provideRouter(routes),
        providePrimeNG({
            ripple: true,
            theme: {
                options: {
                    darkModeSelector: false,
                },
                preset: Aura,
            },
        }),
        provideEffects([AuthEffects, UsersListEffects, UserEditEffects, NotificationEffects]),
        provideStore({
            auth: authReducer,
            usersList: usersListReducer,
            userEdit: userEditReducer,
        }),
    ],
};
