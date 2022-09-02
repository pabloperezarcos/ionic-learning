import { ComponentFixture, TestBed, waitForAsync } from "@angular/core/testing";
import { IonicModule } from "@ionic/angular";

import { CardsDuocPage } from "./cards-duoc.page";

describe('CardsDuocPage', () => {
    let component: CardsDuocPage;
    let fixture: ComponentFixture<CardsDuocPage>;
  
    beforeEach(waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [ CardsDuocPage ],
        imports: [IonicModule.forRoot()]
      }).compileComponents();
  
      fixture = TestBed.createComponent(CardsDuocPage);
      component = fixture.componentInstance;
      fixture.detectChanges();
    }));
  
    it('should create', () => {
      expect(component).toBeTruthy();
    });
  });