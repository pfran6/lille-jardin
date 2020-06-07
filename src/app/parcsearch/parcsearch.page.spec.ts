import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ParcsearchPage } from './parcsearch.page';

describe('ParcsearchPage', () => {
  let component: ParcsearchPage;
  let fixture: ComponentFixture<ParcsearchPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParcsearchPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ParcsearchPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
