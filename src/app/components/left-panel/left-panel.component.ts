import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { AvatarModule } from 'primeng/avatar';
import { PopoverModule } from 'primeng/popover';
import { ButtonModule } from 'primeng/button';
import { FluidModule } from 'primeng/fluid';
import { authUserSelector } from '../../state/auth/auth.selectors';
import { map } from 'rxjs';
import { CommonModule } from '@angular/common';
import { logoutAction } from '../../state/auth/auth.actions';

@Component({
    selector: 'app-left-panel',
    imports: [AvatarModule, CommonModule, PopoverModule, ButtonModule, FluidModule],
    templateUrl: './left-panel.component.html',
    styleUrl: './left-panel.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LeftPanelComponent {
    private _store = inject(Store);

    user$ = this._store.select(authUserSelector);
    avatarLabel$ = this.user$.pipe(
        map((u) => u?.firstName.charAt(0).toUpperCase())
    );

    onLogoutClick() {
        this._store.dispatch(logoutAction())
    }
}
