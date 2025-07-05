import {
    ChangeDetectionStrategy,
    Component,
    EventEmitter,
    inject,
    Input,
    OnChanges,
    Output,
} from '@angular/core';
import { DialogModule } from 'primeng/dialog';
import { User } from '../../services/user';
import {
    FormControl,
    FormGroup,
    Validators,
    ReactiveFormsModule,
} from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { TooltipModule } from 'primeng/tooltip';
import { FormFieldComponent } from '../form-field/form-field.component';
import { markAllAsDirty } from '../../utils/reactive-form-utils';
import { PASSWORD_REGEX, PASSWORD_TOOLTIP } from '../../constants';
import { Store } from '@ngrx/store';
import { userEditSavingSelector } from '../../state/user-edit/user-edit.selectors';
import { createUserAction } from '../../state/user-edit/user-edit.actions';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-user-dialog',
    imports: [
        DialogModule,
        ReactiveFormsModule,
        ButtonModule,
        FormFieldComponent,
        TooltipModule,
        CommonModule,
    ],
    templateUrl: './user-dialog.component.html',
    styleUrl: './user-dialog.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserDialogComponent implements OnChanges {
    @Input({ required: true }) user!: User | null;
    @Input() mode = 'view' as 'view' | 'edit';

    @Output() close = new EventEmitter<void>();

    private _store = inject(Store);

    readonly PASSWORD_TOOLTIP = PASSWORD_TOOLTIP;

    userForm = new FormGroup({
        email: new FormControl('', {
            validators: [Validators.required, Validators.email],
            nonNullable: true,
            updateOn: 'blur',
        }),
        password: new FormControl('', {
            validators: [
                (control) => (this.user ? null : Validators.required(control)),
                (control) =>
                    this.user
                        ? null
                        : Validators.pattern(PASSWORD_REGEX)(control),
            ],
            nonNullable: true,
        }),
        firstName: new FormControl('', {
            validators: [Validators.required],
            nonNullable: true,
        }),
        lastName: new FormControl('', {
            validators: [Validators.required],
            nonNullable: true,
        }),
    });
    header = '';
    submitting$ = this._store.select(userEditSavingSelector);

    ngOnChanges(): void {
        if (!this.user && this.mode === 'view') {
            throw new Error('Are you going to view a user that is null ?!');
        }

        this.userForm.reset({
            email: this.user?.email,
            firstName: this.user?.firstName,
            lastName: this.user?.lastName,
            password: '',
        });
        if (!this.user) {
            this.header = 'Create a User';
        } else {
            this.header = this.mode === 'edit' ? 'Edit a User' : 'User info';
        }
    }

    onSubmit() {
        markAllAsDirty(this.userForm);
        if (this.userForm.invalid) return;
        this._store.dispatch(createUserAction(this.userForm.getRawValue()));
    }
}
