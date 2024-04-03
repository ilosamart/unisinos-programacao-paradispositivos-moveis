import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { tabInicioPage } from './tabInicio.page';

describe('tabInicioPage', () => {
  let component: tabInicioPage;
  let fixture: ComponentFixture<tabInicioPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [tabInicioPage],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule]
    }).compileComponents();

    fixture = TestBed.createComponent(tabInicioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
