import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-segment',
  templateUrl: './segment.page.html',
  styleUrls: ['./segment.page.scss'],
})
export class SegmentPage implements OnInit {

  superheroes: Observable<any>;
  publisher: string = '';

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.superheroes = this.dataService.getHeroes();
  }

  segmentChanged(event){
    //console.log(event)
    if ( event.detail.value==='todos'){
      return this.publisher = '';
    }
    
    this.publisher = event.detail.value;
  }

}
