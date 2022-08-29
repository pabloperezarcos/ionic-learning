import { Component, OnInit } from '@angular/core';

//Creamos una interface para usarla en distintos arreglos.
interface Componente {
  icon: string;
  name: string;
  redirectTo: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  //Aqui creamos un arreglo de Componente (nombre del arreglo)
  components: Componente[] = [
    {
      icon: 'american-football-outline',
      name: 'Action sheet',
      redirectTo: '/action-sheet'
    },
    {
      icon: 'logo-apple-appstore',
      name: 'Alertas',
      redirectTo: '/alert'
    },
    {
      icon: 'person-circle',
      name: 'Avatar',
      redirectTo: '/avatar'
    },
    {
      icon: 'enter-outline',
      name: 'Buttons',
      redirectTo: '/boton'
    },
    {
      icon: 'game-controller-outline',
      name: 'Star Wars Duoc UC',
      redirectTo: '/starwars'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
