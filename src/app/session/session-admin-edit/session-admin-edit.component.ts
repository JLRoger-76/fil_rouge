import { Component, OnInit } from '@angular/core';
import { FormControl, FormControlName, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Session } from '../session';
import { SessionService } from '../session.service';
import { ThemeService } from 'src/app/theme/theme.service';
import { FormationService } from 'src/app/formation/formation.service';
import { Training } from 'src/app/formation/formation';
import { InstructorService } from 'src/app/instructor/instructor.service';
import { Instructor } from 'src/app/instructor/instructor';
@Component({
  selector: 'app-session-admin-edit',
  templateUrl: './session-admin-edit.component.html',
  styleUrls: ['./session-admin-edit.component.css']
})
export class SessionAdminEditComponent implements OnInit{
  constructor( private service:SessionService,
               private tservice:ThemeService ,
               private formationservice:FormationService,
               private instrucorservice:InstructorService,
               private route: ActivatedRoute) { } 

  sessionForm = new FormGroup({
    id:new FormControl(0),
    formation: new FormControl('',[Validators.required]),
    instructor: new FormControl('',), 
    startDate: new FormControl('',[Validators.required,Validators.minLength(3)]),
    endDate:new FormControl("",[Validators.required,Validators.minLength(3)]),
    address:new FormControl("",[Validators.required,Validators.minLength(3)]),
  });

  themes=this.tservice.getAll();
  trainings: Training[] = [];
  session:Session=<Session>{};
  instructors:Instructor[]=[];

  get f(){
    return this.sessionForm.controls;
  }
  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    if (id){
      this.session=this.service.getSessionById(id)!;
      this.sessionForm.setValue(this.session);
      this.trainings=[];
    } 
  }
 
  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.sessionForm.value);
  }
  selectFormation(id: number) {
    this.trainings=this.formationservice.getTrainingsOfTheme(id);
  }

  selectInstructor(id: number){
    this.instructors=this.instrucorservice.getByFormationId(id);
    console.log(id);
  }
}
