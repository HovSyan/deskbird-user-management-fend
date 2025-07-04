import {
    ChangeDetectionStrategy,
    Component,
    inject,
    OnInit,
    signal,
} from '@angular/core';
import { ProgressBarModule } from 'primeng/progressbar';
import { ApiService } from '../../services/api';

@Component({
    selector: 'app-hosting-service-wait',
    imports: [ProgressBarModule],
    templateUrl: './hosting-service-wait.component.html',
    styleUrl: './hosting-service-wait.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
        '[style.display]': "done ? 'none' : 'auto'",
    },
})
export class HostingServiceWaitComponent implements OnInit {
    private _apiService = inject(ApiService);

    done = false;

    ngOnInit(): void {
        this._apiService.healthCheck().then(() => (this.done = true));
    }
}
