import { Component, OnInit } from '@angular/core';
import { NavigationExtras } from '@angular/router';
import { NavController } from '@ionic/angular';

//Creamos una interface para usarla en distintos arreglos.
interface Componente {
  name: string;
  homeworld: string;
  wiki: string;
  image: string;
}

@Component({
  selector: 'app-starwars',
  templateUrl: './starwars.page.html',
  styleUrls: ['./starwars.page.scss'],
})
export class StarwarsPage implements OnInit {

  //Aqui creamos un arreglo de Componente (nombre del arreglo)
  components: Componente[] = [
    {
      name: 'Luke Skywalker',
      homeworld: 'tatooine',
      wiki: 'http://starwars.wikia.com/wiki/Luke_Skywalker',
      image: '/assets/luke.jpg',
    },
    {
      name: 'C-3PO',
      homeworld: 'tatooine',
      wiki: 'http://starwars.wikia.com/wiki/C-3PO',
      image: '/assets/c3po.jpg',
    },
    {
      name: 'R2-D2',
      homeworld: 'naboo',
      wiki: 'http://starwars.wikia.com/wiki/R2-D2',
      image: '/assets/r2d2.jpg',
    },
    {
      name: 'Darth Vader',
      homeworld: 'tatooine',
      wiki: 'http://starwars.wikia.com/wiki/Anakin_Skywalker',
      image: 'https://vignette.wikia.nocookie.net/fr.starwars/images/3/32/Dark_Vador.jpg',
    },
    {
      name: 'Leia Organa',
      homeworld: 'alderaan',
      wiki: 'http://starwars.wikia.com/wiki/Leia_Organa',
      image: 'https://vignette.wikia.nocookie.net/starwars/images/f/fc/Leia_Organa_TLJ.png',
    },
    {
      name: 'Owen Lars',
      homeworld: 'tatooine',
      wiki: 'http://starwars.wikia.com/wiki/Owen_Lars',
      image: 'https://vignette.wikia.nocookie.net/starwars/images/e/eb/OwenCardTrader.png',
    },
    {
      name: 'Beru Whitesun lars',
      homeworld: 'tatooine',
      wiki: 'http://starwars.wikia.com/wiki/Beru_Whitesun_Lars',
      image: 'https://vignette.wikia.nocookie.net/starwars/images/c/cc/BeruCardTrader.png',
    },
    {
      name: 'R5-D4',
      homeworld: 'tatooine',
      wiki: 'http://starwars.wikia.com/wiki/R5-D4',
      image: 'https://vignette.wikia.nocookie.net/starwars/images/c/cb/R5-D4_Sideshow.png',
    },
    {
      name: 'Biggs Darklighter',
      homeworld: 'tatooine',
      wiki: 'http://starwars.wikia.com/wiki/Biggs_Darklighter',
      image: 'https://vignette.wikia.nocookie.net/starwars/images/0/00/BiggsHS-ANH.png',
    },
    {
      name: 'Obi-Wan Kenobi',
      homeworld: 'stewjon',
      wiki: 'http://starwars.wikia.com/wiki/Obi-Wan_Kenobi',
      image: 'https://vignette.wikia.nocookie.net/starwars/images/4/4e/ObiWanHS-SWE.jpg',
    },
    {
      name: 'Anakin Skywalker',
      homeworld: 'tatooine',
      wiki: 'http://starwars.wikia.com/wiki/Anakin_Skywalker',
      image: 'https://vignette.wikia.nocookie.net/starwars/images/6/6f/Anakin_Skywalker_RotS.png',
    },
    {
      name: 'Wilhuff Tarkin',
      homeworld: 'eriadu',
      wiki: 'http://starwars.wikia.com/wiki/Wilhuff_Tarkin',
      image: 'https://vignette.wikia.nocookie.net/starwars/images/c/c1/Tarkininfobox.jpg',
    }

  ];


  constructor(public navCtrl: NavController) {
  }

  goToDetalles(componente: any) {
    const navigationExtras: NavigationExtras = {
      queryParams: {
        personaje: JSON.stringify(componente)
      }
    };
    this.navCtrl.navigateForward(['cards-duoc/'], navigationExtras)

  };

  ngOnInit() {

  }

}
