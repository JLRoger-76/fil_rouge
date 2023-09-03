import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Session } from '../session';
import { SessionService } from '../session.service';

@Component({
  selector: 'app-session-admin-edit',
  templateUrl: './session-admin-edit.component.html',
  styleUrls: ['./session-admin-edit.component.css']
})
export class SessionAdminEditComponent implements OnInit{
  constructor( private service:SessionService,private route: ActivatedRoute) { } 

  sessionForm = new FormGroup({
    id:new FormControl(0),
    formation: new FormControl('',[Validators.required,Validators.minLength(3)]),
    instructor: new FormControl('',), 
    startDate: new FormControl('',[Validators.required,Validators.minLength(3)]),
    endDate:new FormControl("",[Validators.required,Validators.minLength(3)]),
    address:new FormControl("",[Validators.required,Validators.minLength(3)]),
  });

  session:Session=<Session>{};

  get f(){
    return this.sessionForm.controls;
  }
  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    if (id){
      this.session=this.service.getSessionById(id)!;
      this.sessionForm.setValue(this.session)
    } 
  }
  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.sessionForm.value);
  }
}
