import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Note } from '../models/node.model';
import { NoteServiceService } from '../note-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-view-note',
  templateUrl: './view-note.page.html',
  styleUrls: ['./view-note.page.scss'],
})
export class ViewNotePage implements OnInit {
  note: Note;
  constructor( private route: ActivatedRoute, private noteService: NoteServiceService, private router: Router) {
    // tslint:disable-next-line:radix
    const create =  parseInt(this.route.snapshot.paramMap.get('createDate'));
    this.noteService.
      getNote(create).
      then(Nota => this.note = Nota);
  }

  ngOnInit(): void {
  }

  DeleteNote(createDate: number) {
    this.noteService.deleteNote(this.note.createDate);
  }
}
