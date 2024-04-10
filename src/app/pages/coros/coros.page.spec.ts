import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CorosPage } from './coros.page';

describe('CorosPage', () => {
  let component: CorosPage;
  let fixture: ComponentFixture<CorosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CorosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CorosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
