import { Component, ViewChild } from '@angular/core';
import { MatMenu } from '@angular/material/menu';
import { Arquivo } from 'src/app/_models/pastas';

@Component({
  selector: 'app-menu-arquivo',
  templateUrl: './menu-arquivo.component.html',
  styleUrls: ['./menu-arquivo.component.scss']
})
export class MenuArquivoComponent {

  @ViewChild(MatMenu, { static: true }) public menu!: MatMenu;

  baixarArquivo(arquivo: Arquivo) {

  }

  excluirArquivo(arquivo: Arquivo) {

  }
}
