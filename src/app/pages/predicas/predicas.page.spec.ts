import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PredicasPage } from './predicas.page';

describe('PredicasPage', () => {
  let component: PredicasPage;
  let fixture: ComponentFixture<PredicasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PredicasPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PredicasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
