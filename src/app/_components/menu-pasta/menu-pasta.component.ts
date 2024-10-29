import { Pasta } from './../../_models/pastas';
import { Component, ViewChild } from '@angular/core';
import { MatMenu } from '@angular/material/menu';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { AdicionarArquivoDialogComponent } from '../adicionar-arquivo-dialog/adicionar-arquivo-dialog.component';

@Component({
  selector: 'app-menu-pasta',
  templateUrl: './menu-pasta.component.html',
  styleUrls: ['./menu-pasta.component.scss']
})
export class MenuPastaComponent {

  @ViewChild(MatMenu, { static: true }) menu!: MatMenu;

  constructor(private dialog: MatDialog) {

  }

  adicionarArquivo(pasta: Pasta) {
    this.dialog.open(
      AdicionarArquivoDialogComponent,
      {
        width: '600px',
        data: {pasta},
        disableClose: true,
        closeOnNavigation: true
      }
    )
  }

}
