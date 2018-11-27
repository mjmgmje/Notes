import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Note } from './models/node.model';

@Injectable({
  providedIn: 'root'
})
export class NoteServiceService {
  private notes: Note[] = [];
  constructor(public storage: Storage) {}

  saveNote(note: Note) {
    note.createDate = Date.now();
    this.notes.push(note);
    this.storage.set('notes', this.notes);
  }

  getAllNotes() {
    return this.storage.get('notes');
  }
}
