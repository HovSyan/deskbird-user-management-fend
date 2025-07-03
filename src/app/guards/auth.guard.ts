import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { UserService } from '../services/user';
import { Store } from '@ngrx/store';
import { userLoadAction } from '../state/auth/auth.actions';

export const AuthGuard: CanActivateFn = async () => {
    const userService = inject(UserService);
    const store = inject(Store);
    const router = inject(Router);

    try {
        const { data: user } = await userService.getMe()
        store.dispatch(userLoadAction(user))
        return true;
    } catch {
        router.navigate(['login']);
        return false
    }
};
