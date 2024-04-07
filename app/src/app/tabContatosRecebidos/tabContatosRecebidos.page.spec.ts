import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { tabContatosRecebidosPage } from './tabContatosRecebidos.page';

describe('tabContatosRecebidosPage', () => {
  let component: tabContatosRecebidosPage;
  let fixture: ComponentFixture<tabContatosRecebidosPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [tabContatosRecebidosPage],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule]
    }).compileComponents();

    fixture = TestBed.createComponent(tabContatosRecebidosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
