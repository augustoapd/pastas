import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuPastaComponent } from './menu-pasta.component';

describe('MenuPastaComponent', () => {
  let component: MenuPastaComponent;
  let fixture: ComponentFixture<MenuPastaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuPastaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuPastaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
