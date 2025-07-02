import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-protected-pages',
  imports: [RouterOutlet],
  templateUrl: './protected-pages.component.html',
  styleUrl: './protected-pages.component.scss'
})
export class ProtectedPagesComponent {

}
