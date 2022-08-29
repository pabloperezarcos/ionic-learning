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
      icon: 'person-circle-outline',
      name: 'Avatar',
      redirectTo: '/avatar'
    },
    {
      icon: 'enter-outline',
      name: 'Buttons',
      redirectTo: '/boton'
    },
    {
      icon: 'card-outline',
      name: 'Cards',
      redirectTo: '/cards'
    },
    {
      icon: 'checkbox-outline',
      name: 'Checkboxs',
      redirectTo: '/checkbox'
    },
    {
      icon: 'calendar-outline',
      name: 'Date Time',
      redirectTo: '/date-time'
    },
    {
      icon: 'grid-outline',
      name: 'Grids',
      redirectTo: '/grid'
    },
    {
      icon: 'infinite-outline',
      name: 'Infinite Scroll',
      redirectTo: '/infinite'
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
