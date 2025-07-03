import { Component, inject } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { ToastModule } from 'primeng/toast';
import { Store } from '@ngrx/store';
import { loginErrorSelector } from './state/auth/auth.selectors';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, ToastModule],
  providers: [MessageService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  private _store = inject(Store);
  private _messageService = inject(MessageService);

  ngOnInit() {
    this._store
      .select(loginErrorSelector)
      .subscribe((e) =>
        this._messageService.add({ severity: 'error', summary: e?.message })
      );
  }
}
