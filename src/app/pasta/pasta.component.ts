import { Component, Input, ViewChild } from '@angular/core';
import { Arquivo, Bucket, Pasta } from '../_models/pastas';
import { MatMenuTrigger } from '@angular/material/menu';

@Component({
  selector: 'app-pasta',
  templateUrl: './pasta.component.html',
  styleUrls: ['./pasta.component.scss']
})
export class PastaComponent {

  @Input() pasta?: Pasta | Bucket;

  @ViewChild('matMenuTriggerFile', {static: true }) matMenuTriggerFile!: MatMenuTrigger;
  @ViewChild('matMenuTriggerFolder', { static: true }) matMenuTriggerFolder!: MatMenuTrigger;

  menuTopLeftPosition = { x: '0', y: '0' }


  get vazia() {
    return this.pasta?.arquivos.length == 0 && this.pasta?.pastas.length == 0
  }

  onRightClickFile(event: MouseEvent, arquivo: Arquivo) {
        // preventDefault avoids to show the visualization of the right-click menu of the browser
        event.preventDefault();

        // we record the mouse position in our object
        this.menuTopLeftPosition.x = event.clientX + 'px';
        this.menuTopLeftPosition.y = event.clientY + 'px';
        // we open the menu
        this.matMenuTriggerFile!.menuData = {arquivo};
        this.matMenuTriggerFile!.openMenu();
  }

  onRightClickFolder(event: MouseEvent, pasta: Pasta) {
        // preventDefault avoids to show the visualization of the right-click menu of the browser
        event.preventDefault();

        // we record the mouse position in our object
        this.menuTopLeftPosition.x = event.clientX + 'px';
        this.menuTopLeftPosition.y = event.clientY + 'px';
        // we open the menu
        this.matMenuTriggerFolder!.menuData = {pasta};
        this.matMenuTriggerFolder!.openMenu();
  }

}
