import { Component } from '@angular/core';
import { NoteServiceService } from '../note-service.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {
  noteService: NoteServiceService;

  notes: { title: String }[] = [];
  constructor(noteService: NoteServiceService) {
    this.noteService = noteService;
  }

  ionViewWillEnter() {
    this.notes = this.getAllNotes();
  }

  getAllNotes() {
    return this.noteService.getAllNotes();
  }
}
