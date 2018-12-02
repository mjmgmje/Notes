import { Component, ViewEncapsulation } from '@angular/core';
import { NoteServiceService } from '../note-service.service';
import { Note } from '../models/node.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class HomePage {

  notes: Promise<Note[]>;
  constructor(public noteService: NoteServiceService, public router: Router) {
  }

  ionViewWillEnter() {
    this.notes = this.getAllNotes();
  }

  getAllNotes() {
    return this.noteService.getAllNotes();
  }

  goToNote(createDate: number) {
    this.router.navigateByUrl('/notes/' + createDate);
  }
}
