import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { tabCadastroPage } from './tabCadastro.page';

describe('tabCadastroPage', () => {
  let component: tabCadastroPage;
  let fixture: ComponentFixture<tabCadastroPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [tabCadastroPage],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule]
    }).compileComponents();

    fixture = TestBed.createComponent(tabCadastroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
