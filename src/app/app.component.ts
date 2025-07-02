import { Component, inject } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'deskbird-user-management-fend';
  private _router = inject(Router);

  ngOnInit() {
    // this._router.navigate(['/users'])
  }
}
