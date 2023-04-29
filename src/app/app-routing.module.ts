import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GraficaFlujoComponent } from './components/grafica-flujo/grafica-flujo.component';
import { GraficaValvulaComponent } from './components/grafica-valvula/grafica-valvula.component';
import { BarraNavegacionComponent } from './components/barra-navegacion/barra-navegacion.component';

const routes: Routes = [
  { path: '', redirectTo: 'graficaflujo', pathMatch: 'full' },
  { path: 'graficaflujo', component: GraficaFlujoComponent },
  { path: 'graficavalvula', component: GraficaValvulaComponent },
  { path: 'barranavegacion', component: BarraNavegacionComponent },
  { path: '**', redirectTo: 'graficaflujo', pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
