import { JsonPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cards-duoc',
  templateUrl: './cards-duoc.page.html',
  styleUrls: ['./cards-duoc.page.scss'],
})
export class CardsDuocPage implements OnInit {

  componente = null;

  tituloPagina = "Cards DUOC"

  constructor(private activatedRoute: ActivatedRoute) {
    this.activatedRoute.queryParams.subscribe(params =>{
      this.componente = JSON.parse(params.personaje);
    });
   }

  ngOnInit() {

    console.log(this.componente);
    this.tituloPagina= this.componente.name;
  }


}
