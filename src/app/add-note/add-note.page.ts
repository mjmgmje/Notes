import { Component, OnInit } from '@angular/core';
import { NoteServiceService } from '../note-service.service';

@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.page.html',
  styleUrls: ['./add-note.page.scss']
})
export class AddNotePage implements OnInit {
  noteService: NoteServiceService;
  constructor(noteService: NoteServiceService) {
    this.noteService = noteService;
  }

  ngOnInit() {}

  addNote(value: { title: String }) {
    this.noteService.saveNote(value);
  }
}
