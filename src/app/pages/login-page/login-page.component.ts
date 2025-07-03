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
import { FloatLabelModule } from 'primeng/floatlabel';
import { ButtonModule } from 'primeng/button';
import { PasswordModule } from 'primeng/password';
import { MessageModule } from 'primeng/message';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { ApiService } from '../../services/api/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  imports: [
    FormsModule,
    PanelModule,
    ReactiveFormsModule,
    InputTextModule,
    FloatLabelModule,
    ButtonModule,
    PasswordModule,
    MessageModule,
    ToastModule,
  ],
  providers: [MessageService],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss',
})
export class LoginPageComponent {
  loginForm = new FormGroup({
    email: new FormControl('', {
      validators: [Validators.required],
      nonNullable: true,
    }),
    password: new FormControl('', { nonNullable: true }),
  });

  private _api = inject(ApiService);
  private _messages = inject(MessageService);
  private _router = inject(Router);

  isInvalid(controlName: keyof typeof this.loginForm.controls) {
    const control = this.loginForm.get(controlName)!;
    return control.invalid && control.dirty;
  }

  async onSubmit() {
    this.loginForm.updateValueAndValidity();
    try {
      await this._api.login(this.loginForm.getRawValue());
      await this._router.navigate(['users']);
    } catch (e) {
      this._messages.add({
        summary: 'Error',
        detail: 'Something went wrong',
        life: 100_000,
        severity: 'error',
      });
    }
  }
}
