import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ProgressSpinnerModule } from 'primeng/progressspinner';

@Component({
    selector: 'app-list-loading',
    imports: [ProgressSpinnerModule],
    templateUrl: './list-loading.component.html',
    styleUrl: './list-loading.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListLoadingComponent {}
