import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LeftPanelComponent } from '../../components/left-panel/left-panel.component';

@Component({
    selector: 'app-protected-pages',
    imports: [RouterOutlet, LeftPanelComponent],
    templateUrl: './protected-pages.component.html',
    styleUrl: './protected-pages.component.scss',
})
export class ProtectedPagesComponent {}
