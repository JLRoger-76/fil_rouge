import { Component, OnInit } from '@angular/core';
import { SessionService } from '../session.service';
import { Session } from '../session';

@Component({
  selector: 'app-session-admin',
  templateUrl: './session-admin.component.html',
  styleUrls: ['./session-admin.component.css']
})
export class SessionAdminComponent implements OnInit {
  constructor( private service:SessionService) { } 
  
  sessions: Session[] = [];
  
  ngOnInit(): void {
    this.sessions = this.service.getAll();

  }
}
