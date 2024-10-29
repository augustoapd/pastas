import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExcluirArquivoDialogComponent } from './excluir-arquivo-dialog.component';

describe('ExcluirArquivoDialogComponent', () => {
  let component: ExcluirArquivoDialogComponent;
  let fixture: ComponentFixture<ExcluirArquivoDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExcluirArquivoDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExcluirArquivoDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
