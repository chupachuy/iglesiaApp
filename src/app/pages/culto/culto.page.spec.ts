import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CultoPage } from './culto.page';

describe('CultoPage', () => {
  let component: CultoPage;
  let fixture: ComponentFixture<CultoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CultoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CultoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
