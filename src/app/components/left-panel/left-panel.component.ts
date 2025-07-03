import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { AvatarModule } from 'primeng/avatar';
import { currentUserSelector } from '../../state/auth/auth.selectors';
import { map } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-left-panel',
  imports: [AvatarModule, CommonModule],
  templateUrl: './left-panel.component.html',
  styleUrl: './left-panel.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LeftPanelComponent {
  private _store = inject(Store);

  avatarLabel$ = this._store
    .select(currentUserSelector)
    .pipe(map((u) => u?.firstName.charAt(0).toUpperCase()));
}
