import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import {
    FormControl,
    FormGroup,
    ReactiveFormsModule,
    Validators,
} from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { MessageService } from 'primeng/api';
import { FluidModule } from 'primeng/fluid';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { loginAction } from '../../state/auth/auth.actions';
import { authLoadingSelector } from '../../state/auth/auth.selectors';
import { FormFieldComponent } from '../../components/form-field/form-field.component';
import { markAllAsDirty } from '../../utils/reactive-form-utils';

@Component({
    selector: 'app-login-page',
    imports: [
        ReactiveFormsModule,
        ButtonModule,
        FluidModule,
        CommonModule,
        FormFieldComponent,
    ],
    providers: [MessageService],
    templateUrl: './login-page.component.html',
    styleUrl: './login-page.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginPageComponent {
    private _store = inject(Store);

    loginForm = new FormGroup({
        email: new FormControl('', {
            validators: [Validators.required, Validators.email],
            nonNullable: true,
            updateOn: 'blur',
        }),
        password: new FormControl('', {
            validators: Validators.required,
            nonNullable: true,
        }),
    });
    isSubmitting$ = this._store.select(authLoadingSelector);

    async onSubmit() {
        markAllAsDirty(this.loginForm);
        if (this.loginForm.invalid) return;
        this._store.dispatch(loginAction(this.loginForm.getRawValue()));
    }
}
