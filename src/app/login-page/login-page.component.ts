import { Component } from '@angular/core';
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
    MessageModule
  ],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss',
})
export class LoginPageComponent {
    loginForm = new FormGroup({
        email: new FormControl('', { validators: [Validators.required], nonNullable: true }),
        password: new FormControl('')
    })

    isInvalid(controlName: keyof typeof this.loginForm.controls) {
        const control = this.loginForm.get(controlName)!;
        return control.invalid && control.dirty;
    }

    onSubmit() {
        this.loginForm.updateValueAndValidity();
    }
}
