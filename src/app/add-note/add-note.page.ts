import { Component, OnInit } from '@angular/core';
import { NoteServiceService } from '../note-service.service';
import { Note } from '../models/node.model';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.page.html',
  styleUrls: ['./add-note.page.scss']
})
export class AddNotePage implements OnInit {
  FormNote: FormGroup;
  titleAlert: String = '¡Hey! dame un buen titulo';
  contentAlert: String = 'Me siento vacia';
  dateAlert: String = 'Necesito una fecha';

  note: Note;
  date: Date = new Date();
  title: String = '';
  content: String = '';
  constructor(
    private noteService: NoteServiceService,
    private fb: FormBuilder,
    private router: Router
  ) {
    this.FormNote = new FormGroup({
      title: new FormControl('', Validators.required),
      content: new FormControl(),
      date: new FormControl()
    });
  }

  ngOnInit() {}

  addNote(value: Note) {
    this.noteService.saveNote(value);
  }
}
