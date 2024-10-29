import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatListModule} from '@angular/material/list';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {PastaComponent} from './pasta/pasta.component';
import {MatButtonModule} from '@angular/material/button';
import {MatTooltipModule} from '@angular/material/tooltip';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatMenuModule} from '@angular/material/menu';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import {MatProgressBarModule} from '@angular/material/progress-bar';

import { AdicionarArquivoDialogComponent } from './_components/adicionar-arquivo-dialog/adicionar-arquivo-dialog.component';
import { ExcluirArquivoDialogComponent } from './_components/excluir-arquivo-dialog/excluir-arquivo-dialog.component';
import { MenuArquivoComponent } from './_components/menu-arquivo/menu-arquivo.component';
import { MenuPastaComponent } from './_components/menu-pasta/menu-pasta.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    PastaComponent,
    AdicionarArquivoDialogComponent,
    ExcluirArquivoDialogComponent,
    MenuArquivoComponent,
    MenuPastaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatListModule,
    MatIconModule,
    MatExpansionModule,
    MatButtonModule,
    MatTooltipModule,
    FlexLayoutModule,
    MatMenuModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatDialogModule,
    MatProgressBarModule
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
