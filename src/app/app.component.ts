import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';
import { LiveComponent } from './components/live/live.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
    FooterComponent,
    LiveComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'kt';

  constructor(private router: Router) {}

  navigateToLive() {
    console.log("aaaaaaaaaaaaaaa")
    this.router.navigate(['/live']);
  }
}
