import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LiveComponent } from './components/live/live.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
    //{ path: '', component: AppComponent },
    { path: 'live', component: LiveComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
