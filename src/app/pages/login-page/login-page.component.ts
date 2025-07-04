import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { PanelModule } from 'primeng/panel';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { PasswordModule } from 'primeng/password';
import { MessageModule } from 'primeng/message';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { IftaLabelModule } from 'primeng/iftalabel';
import { FluidModule } from 'primeng/fluid';
import { CommonModule, NgTemplateOutlet } from '@angular/common';
import { Store } from '@ngrx/store';
import { loginAction } from '../../state/auth/auth.actions';
import { authLoadingSelector } from '../../state/auth/auth.selectors';

@Component({
  selector: 'app-login-page',
  imports: [
    FormsModule,
    PanelModule,
    ReactiveFormsModule,
    InputTextModule,
    IftaLabelModule,
    ButtonModule,
    PasswordModule,
    MessageModule,
    FluidModule,
    NgTemplateOutlet,
    CommonModule
  ],
  providers: [MessageService],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginPageComponent {
  private _store = inject(Store);

  loginForm = new FormGroup({
    email: new FormControl('', {
      validators: [Validators.required, Validators.email],
      updateOn: 'blur',
      nonNullable: true,
    }),
    password: new FormControl('', {
      validators: Validators.required,
      updateOn: 'blur',
      nonNullable: true,
    }),
  });
  isSubmitting$ = this._store.select(authLoadingSelector);

  isInvalid(controlName: keyof typeof this.loginForm.controls) {
    const control = this.loginForm.get(controlName)!;
    return control.invalid && control.dirty;
  }

  async onSubmit() {
    this._markAllAsDirty();
    if (this.loginForm.invalid) return;
    this._store.dispatch(loginAction(this.loginForm.getRawValue()))
  }

  private _markAllAsDirty() {
    this.loginForm.controls.email.markAsDirty();
    this.loginForm.controls.password.markAsDirty();
  }
}
