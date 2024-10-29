import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdicionarArquivoDialogComponent } from './adicionar-arquivo-dialog.component';

describe('AdicionarArquivoDialogComponent', () => {
  let component: AdicionarArquivoDialogComponent;
  let fixture: ComponentFixture<AdicionarArquivoDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdicionarArquivoDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdicionarArquivoDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
