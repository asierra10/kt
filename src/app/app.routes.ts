import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeComponent } from './components/sites/home/home.component';
import { LiveComponent } from './components/sites/live/live.component';
import { ExperienceComponent } from './components/sites/experience/experience.component';
import { ArtistComponent } from './components/sites/artist/artist.component';
import { StudioComponent } from './components/sites/studio/studio.component';
import { ContactComponent } from './components/sites/contact/contact.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'live', component: LiveComponent },
    { path: 'experience', component: ExperienceComponent },
    { path: 'artist', component: ArtistComponent },
    { path: 'studio', component: StudioComponent },
    { path: 'contact', component: ContactComponent },
    { path: '**', component: HomeComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
