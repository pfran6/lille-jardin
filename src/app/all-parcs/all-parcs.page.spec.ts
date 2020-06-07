import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AllParcsPage } from './all-parcs.page';

describe('AllParcsPage', () => {
  let component: AllParcsPage;
  let fixture: ComponentFixture<AllParcsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllParcsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AllParcsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
