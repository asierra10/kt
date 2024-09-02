import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeComponent } from './components/sites/home/home.component';
import { LiveComponent } from './components/sites/live/live.component';
import { ArtistComponent } from './components/sites/artist/artist.component';
import { ContactComponent } from './components/sites/contact/contact.component';
import { PortraitsComponent } from './components/sites/portraits/portraits.component';
import { LandscapeComponent } from './components/sites/landscape/landscape.component';
import { EventsComponent } from './components/sites/events/events.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'live', component: LiveComponent },
    { path: 'artist', component: ArtistComponent },
    { path: 'portraits', component: PortraitsComponent },
    { path: 'landscape', component: LandscapeComponent },
    { path: 'events', component: EventsComponent },
    { path: 'contact', component: ContactComponent },
    { path: '**', component: HomeComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
