import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { RouterModule } from '@angular/router';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { VinosComponent } from './components/vinos/vinos.component';
import { LicoresComponent } from './components/licores/licores.component';
import { CervezasComponent } from './components/cervezas/cervezas.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthService } from './auth.service';
import { CarritoService } from './carrito.service';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    VinosComponent,
    LicoresComponent,
    CervezasComponent,
    InicioComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    CommonModule,
    RouterModule.forRoot([
      {path: '', component:InicioComponent},
      {path: 'vinos', component:VinosComponent},
      {path: 'licores', component:LicoresComponent},
      {path: 'cervezas', component:CervezasComponent},
      {path: '**', component:PageNotFoundComponent},
    ])
  ],
  providers: [AuthService,
    CarritoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
