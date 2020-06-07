import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { QuartierPage } from './quartier.page';

describe('QuartierPage', () => {
  let component: QuartierPage;
  let fixture: ComponentFixture<QuartierPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuartierPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(QuartierPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
