import { Injectable, OnInit } from '@angular/core';
import { Session } from './session';

@Injectable({
  providedIn: 'root'
})
export class SessionService implements OnInit{

  constructor() { }
  public sessions: Session[] = [
    {id : 0,formation:"Java débutant",instructor:"Doe",startDate:"01/01/2024",endDate:"05/01/2024",address:"Lille"},
  ]
  
  ngOnInit(): void {
  }

  public getAll(): Session[] {      
    return this.sessions;
  }

  public getSessionById(id:number): Session|undefined { 
    return this.sessions.find( t => t.id == id );
  } 
}
