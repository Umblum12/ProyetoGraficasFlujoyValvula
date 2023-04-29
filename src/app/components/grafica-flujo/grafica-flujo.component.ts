import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { Chart } from 'chart.js/auto';
import { Database, set, ref, update, onValue, remove, DataSnapshot, child, getDatabase, get, object } from '@angular/fire/database';

@Component({
  selector: 'app-grafica-flujo',
  templateUrl: './grafica-flujo.component.html',
  styleUrls: ['./grafica-flujo.component.css']
})
export class GraficaFlujoComponent {
  @ViewChild('chart', { static: false }) chartRef!: ElementRef;
  chart: any;
  encabezados: string[] = [];
  valores: number[] = [];
  datos: number[] = [];
  Consumo: any[];
  timeLeft = 60;
  interval: any;
  firstValor: any; // valor actual de la base de datos
  constructor(
    public database: Database
  ) {
    this.Consumo = [];
    this.getusers();
    this.startTimer();
  }
  startTimer() {
    this.interval = setInterval(() => {
      this.getusers(); //METODO PARA ACTUALIZAR DATOS DE WEBAPI

      if (this.timeLeft > 0) {
        this.timeLeft--;
      } else {
        this.timeLeft = 60;
      }
    }, 500);
  }
  pauseTimer() {
    clearInterval(this.interval);
  }
 //Mostrar
 getusers() {
  const dbRef = ref(getDatabase());
  get(child(dbRef, `Consumodeagua/SensordeFlujo/${[]}`)).then((snapshot) => {
    if (snapshot.exists()) {
      this.Consumo = Object.keys(snapshot.val() || {}).map(k => snapshot.val()[k]); //esta cochinada hace todo lo que era el problema
      //mete todo el objeto que me da snapshot y lo pone en un arreglo que si se puede leer por registros por separado alm 
    } else {
      console.log("No data available");
    }
  }).catch((error) => {
    console.error(error);
  });
  for (let index = 0; index < this.Consumo.length; index++) {
    if (index== 22) {
      this.encabezados = [];
    }
    this.Consumo.forEach(element => {
      this.datos.push(Number(element.flujo));
    });
    this.encabezados.push("seg");
    this.chart.data.labels = this.encabezados;
    this.chart.data.datasets[0].data = this.datos;
    this.chart.update();
  }
}
  ngOnInit(): void {
    this.startTimer();
  }
  // Función para inicializar el gráfico de Chart.js con los datos actuales
  ngAfterViewInit() {
    const chartCtx = this.chartRef.nativeElement.getContext('2d');
    this.chart = new Chart(chartCtx, {
      type: 'line',
      data: {
        labels: this.encabezados,
        datasets: [
          {
            label: 'MOVIMIENTOS',
            data: this.datos,
            backgroundColor: 'blue',
            borderColor: 'blue'
          }
        ]
      },
      options: {
        responsive: true
      }
    });
  }
  updateChart() {
    this.chart.update();
  }
}