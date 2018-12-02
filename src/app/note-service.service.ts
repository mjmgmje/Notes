import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Note } from './models/node.model';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class NoteServiceService {
  private notes: Note[] = [];
  constructor(public storage: Storage, private router: Router) {}

  saveNote(note: Note) {
    note.createDate = Date.now();
    this.storage.get('notes').then(notes => {
      this.notes = notes == null ? [] : notes;
      this.notes.push(note);
      this.storage.set('notes', this.notes);
      this.router.navigateByUrl('');
    });
  }

  getAllNotes() {
    return this.storage.get('notes');
  }

  getNote(createDate: number) {
    return this.storage.get('notes').then(notes => {
      const note = [...notes].find(r => r.createDate === createDate);
      return note;
    });
  }
  deleteNote(createDate: number) {
    this.storage.get('notes').then(notes => {
      this.notes = notes == null ? [] : notes;
      this.notes = this.notes.filter(note => {
        return note.createDate !== createDate;
      });
      this.storage.set('notes', this.notes);
      this.router.navigateByUrl('');
    });
  }
}
