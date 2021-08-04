import { Component, Input } from '@angular/core';
import {Note} from "../../../models/note";

@Component({
  selector: 'app-note-item',
  templateUrl: './note-item.component.html',
})
export class NoteItemComponent {
   @Input() item!:Note;
   show:boolean = false;
   showNote(){
     this.show = !this.show;
   }
}
