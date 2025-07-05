import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { HostingServiceWaitComponent } from './components/hosting-service-wait/hosting-service-wait.component';
import { NotificationEffects } from './state/notification/notification.effects';

@Component({
    selector: 'app-root',
    imports: [
        RouterOutlet,
        HeaderComponent,
        ToastModule,
        HostingServiceWaitComponent,
    ],
    providers: [MessageService],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
})
export class AppComponent {
    private _messageService = inject(MessageService);
    private _notificationEffects = inject(NotificationEffects);

    ngOnInit() {
        this._notificationEffects.errorNotificationEffect$.subscribe((e) => {
            this._messageService.add({
                severity: 'error',
                summary: e?.summary,
                text: e?.message,
            });
        });
    }
}
