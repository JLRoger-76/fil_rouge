import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { InstructorService } from '../instructor.service';
import { FormGroup, FormControl,Validators } from '@angular/forms';
import { Instructor } from '../instructor';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-instructor-admin-edit',
  templateUrl: './instructor-admin-edit.component.html',
  styleUrls: ['./instructor-admin-edit.component.css']
})
export class InstructorAdminEditComponent implements OnInit {
  constructor( private service:InstructorService,private route: ActivatedRoute) { } 
 
  instructorForm = new FormGroup({
    id:new FormControl(0),
    firstName: new FormControl('',[Validators.required,Validators.minLength(3)]),
    lastName: new FormControl('',[Validators.required,Validators.minLength(3)]), 
    phoneNumber: new FormControl('',[Validators.required,Validators.minLength(8)]),
    address:new FormControl("",[Validators.required,Validators.minLength(3)]),
  });

  instructor:Instructor=<Instructor>{};

  get f(){
    return this.instructorForm.controls;
  }
  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    if (id){
      this.instructor=this.service.getInstructorById(id)!;
      this.instructorForm.setValue(this.instructor);

    } 
  }
  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.instructorForm.value);
  }

}
