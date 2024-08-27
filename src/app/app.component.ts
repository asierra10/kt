import { Component, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuComponent } from './components/estructure/menu/menu.component';
import { BannerComponent } from './components/estructure/banner/banner.component';
import { FooterComponent } from './components/estructure/footer/footer.component';
import { LiveComponent } from './components/sites/live/live.component';
import { HomeComponent } from './components/sites/home/home.component';
import { ExperienceComponent } from './components/sites/experience/experience.component';
import { ArtistComponent } from './components/sites/artist/artist.component';
import { StudioComponent } from './components/sites/studio/studio.component';
import { ContactComponent } from './components/sites/contact/contact.component';
import { MobilMenuComponent } from './components/estructure/mobil-menu/mobil-menu.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
    MenuComponent,
    MobilMenuComponent,
    BannerComponent,
    FooterComponent,
    HomeComponent,
    LiveComponent,
    ExperienceComponent,
    ArtistComponent, 
    StudioComponent,
    ContactComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  schemas: [NO_ERRORS_SCHEMA,
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class AppComponent {
  title = 'kt';
}
