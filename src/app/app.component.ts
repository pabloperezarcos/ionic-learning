import { Component } from '@angular/core';
import { Componente } from 'src/app/interfaces/interfaces';
import { DataService } from 'src/app/services/data.service';
import { Observable } from 'rxjs';
import { MenuController } from '@ionic/angular';
//import { Platform } from '@ionic/angular';
//import { SplashScreen } from '@ionic-native/splash-screen/ngx';
//import { StatusBarInfo } from '@capacitor/status-bar';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  
  components: Observable<Componente[]>;

  constructor( private menuCtrl : MenuController,
              private dataService: DataService) { }

  ngOnInit() {
    this.components = this.dataService.getMenuOpts();
  }

  mostrarMenu(){
    this.menuCtrl.open('first');
  }
}
