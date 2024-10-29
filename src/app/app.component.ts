import { Component, ViewChild } from '@angular/core';
import { BUCKET_1, Pasta } from './_models/pastas';
import { MatMenuTrigger } from '@angular/material/menu';


export interface Section {
  name: string;
  updated: Date;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {


  @ViewChild('matMenuTriggerFolder', { static: true }) matMenuTriggerFolder!: MatMenuTrigger;
  menuTopLeftPosition = { x: '0', y: '0' }

  bucket1 = BUCKET_1;

  folders: Section[] = [
    {
      name: 'Photos',
      updated: new Date('1/1/16'),
    },
    {
      name: 'Recipes',
      updated: new Date('1/17/16'),
    },
    {
      name: 'Work',
      updated: new Date('1/28/16'),
    },
  ];
  notes: Section[] = [
    {
      name: 'Vacation Itinerary',
      updated: new Date('2/20/16'),
    },
    {
      name: 'Kitchen Remodel',
      updated: new Date('1/18/16'),
    },
  ];
  title = 'pastas';
  panelOpenState = false;

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
