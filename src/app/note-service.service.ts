import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class NoteServiceService {
  private notes: { title: String }[] = [];
  constructor() {}

  saveNote(note: { title: String }) {
    this.notes.push(note);
  }

  getAllNotes() {
    return [...this.notes];
  }
}
