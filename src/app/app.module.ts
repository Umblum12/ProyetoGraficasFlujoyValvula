import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//modulos
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//basededatos firebase
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { provideDatabase,getDatabase } from '@angular/fire/database';
//configuracion de firebase
import { environment } from './environments/environment';
//componentes
import { GraficaFlujoComponent } from './components/grafica-flujo/grafica-flujo.component';
import { GraficaValvulaComponent } from './components/grafica-valvula/grafica-valvula.component';
import { BarraNavegacionComponent } from './components/barra-navegacion/barra-navegacion.component';

@NgModule({
  declarations: [
    AppComponent,
    GraficaFlujoComponent,
    GraficaValvulaComponent,
    BarraNavegacionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
    provideDatabase(() => getDatabase()),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
