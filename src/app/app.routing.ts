import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { TaComponent } from './pages/ta/ta.component';
import { ContactComponent } from './pages/contact/contact.component';
import { IlvanaComponent } from './pages/biographies/ilvana/ilvana.component';
import { AljosaComponent } from './pages/biographies/aljosa/aljosa.component';
import { AmelaComponent } from './pages/biographies/amela/amela.component';
import { JasminaComponent } from './pages/biographies/jasmina/jasmina.component';
import { KlaudijaComponent } from './pages/biographies/klaudija/klaudija.component';
import { MajaComponent } from './pages/biographies/maja/maja.component';
import { MarijaComponent } from './pages/biographies/marija/marija.component';
import { NaidaComponent } from './pages/biographies/naida/naida.component';
import { LjiljanaComponent } from './pages/biographies/ljiljana/ljiljana.component';
import { ServicesComponent }  from './pages/services/services.component';

const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'about', component: AboutComponent },
    { path: 'ta', component: TaComponent },
    { path: 'home', component: HomeComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'ilvana', component: IlvanaComponent },
    { path: 'aljosa', component: AljosaComponent },
    { path: 'amela', component: AmelaComponent },
    { path: 'jasmina', component: JasminaComponent },
    { path: 'klaudija', component: KlaudijaComponent },
    { path: 'maja', component: MajaComponent },
    { path: 'marija', component: MarijaComponent },
    { path: 'naida', component: NaidaComponent },
    { path: 'ljiljana', component: LjiljanaComponent },
    { path: 'services', component: ServicesComponent },
    

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    providers: []
})

export class RoutingModule {


}


