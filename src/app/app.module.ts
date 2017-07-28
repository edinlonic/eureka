import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RoutingModule} from './app.routing';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { TaComponent } from './pages/ta/ta.component';
import { provideRoutes} from '@angular/router';
import { ContactComponent } from './pages/contact/contact.component';
import { Globals}  from '../app/globals';

import { AljosaComponent } from './pages/biographies/aljosa/aljosa.component';
import { AmelaComponent } from './pages/biographies/amela/amela.component';
import { JasminaComponent } from './pages/biographies/jasmina/jasmina.component';
import { KlaudijaComponent } from './pages/biographies/klaudija/klaudija.component';
import { MajaComponent } from './pages/biographies/maja/maja.component';
import { MarijaComponent } from './pages/biographies/marija/marija.component';
import { NaidaComponent } from './pages/biographies/naida/naida.component';
import { IlvanaComponent } from './pages/biographies/ilvana/ilvana.component';
import { LjiljanaComponent } from './pages/biographies/ljiljana/ljiljana.component';
import { CSSCarouselComponent }  from './carousel.component';
import { ServicesComponent }  from './pages/services/services.component';




@NgModule({
  declarations: [
    AppComponent, HomeComponent, AboutComponent, ContactComponent,TaComponent,
    IlvanaComponent,AljosaComponent, AmelaComponent, JasminaComponent,
    KlaudijaComponent, MajaComponent, MarijaComponent, NaidaComponent,LjiljanaComponent,
    CSSCarouselComponent, ServicesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RoutingModule
  ],
  providers: [Globals],
  bootstrap: [AppComponent]
})
export class AppModule { }
