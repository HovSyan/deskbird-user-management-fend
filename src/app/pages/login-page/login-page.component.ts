import { Component, inject } from '@angular/core';
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
import { ApiService } from '../../services/api/api.service';
import { Router } from '@angular/router';
import { NgTemplateOutlet } from '@angular/common';
import { UserService } from '../../services/user/user.service';

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
    ToastModule,
    FluidModule,
    NgTemplateOutlet
  ],
  providers: [MessageService],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss',
})
export class LoginPageComponent {
  loginForm = new FormGroup({
    email: new FormControl('', {
      validators: [Validators.required, Validators.email],
      nonNullable: true,
    }),
    password: new FormControl('', {
      validators: Validators.required,
      nonNullable: true,
    }),
  });
  isSubmitting = false;

  private _userService = inject(UserService);
  private _messages = inject(MessageService);
  private _router = inject(Router);

  isInvalid(controlName: keyof typeof this.loginForm.controls) {
    const control = this.loginForm.get(controlName)!;
    return control.invalid && control.dirty;
  }

  async onSubmit() {
    this._markAllAsDirty();
    if (this.loginForm.invalid) return;

    try {
      this.isSubmitting = true;
      await this._userService.login(this.loginForm.getRawValue());
      await this._router.navigate(['users']);
    } catch (e) {
      this._messages.add({
        summary: 'Error',
        detail: 'Something went wrong',
        severity: 'error',
      });
    } finally {
        this.isSubmitting = false;
    }
  }

  private _markAllAsDirty() {
    this.loginForm.controls.email.markAsDirty();
    this.loginForm.controls.password.markAsDirty();
  }
}
