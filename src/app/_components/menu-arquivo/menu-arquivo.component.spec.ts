import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuArquivoComponent } from './menu-arquivo.component';

describe('MenuArquivoComponent', () => {
  let component: MenuArquivoComponent;
  let fixture: ComponentFixture<MenuArquivoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuArquivoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuArquivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
