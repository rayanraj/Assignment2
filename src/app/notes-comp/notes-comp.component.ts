import { Component, OnInit } from '@angular/core';
import { Note } from '../../models/note';

@Component({
  selector: 'app-notes-comp',
  templateUrl: './notes-comp.component.html',
})
export class NotesCompComponent {

  notes:Note[] = [
    {id:1, title:"Shopping", body:"To buy clothes"},
    {id:2, title:"Insurance", body:"To buy new insurance policy"},
    {id:3, title:"Grocery", body:"To buy groceries"},
  ]

}
