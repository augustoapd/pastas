import { Component, Inject, Input } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Arquivo, Pasta } from 'src/app/_models/pastas';

@Component({
  selector: 'app-adicionar-arquivo-dialog',
  templateUrl: './adicionar-arquivo-dialog.component.html',
  styleUrls: ['./adicionar-arquivo-dialog.component.scss']
})
export class AdicionarArquivoDialogComponent {

  @Input() arquivo!: Arquivo;

  arquivoSelecionado?: File;
  nomeArquivo = '';
  loading = false;

  constructor(
    private dialogRef: MatDialogRef<AdicionarArquivoDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {
      pasta: Pasta
    }
  ) {

  }

  selecionarArquivo($event: Event) {
    const target = $event.target as HTMLInputElement;
    const files = target.files as FileList;

    this.arquivoSelecionado = files[0];
    this.nomeArquivo = this.arquivoSelecionado.name;

    console.log(files);
  }

  adicionarArquivo() {
    this.loading = true;
  }

}
