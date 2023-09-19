import { Component,OnInit } from '@angular/core';
import { Instructor } from '../instructor';
import { InstructorService } from '../instructor.service';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-instructor-admin',
  templateUrl: './instructor-admin.component.html',
  styleUrls: ['./instructor-admin.component.css']
})
export class InstructorAdminComponent implements OnInit {
  constructor( private service:InstructorService) { } 
  
  instructors: Instructor[] = [];
  
  ngOnInit(): void {
    this.service.getAll2().subscribe((data: Instructor[])=>{
      console.log(data);
      this.instructors = data;
    }) 
     
    this.instructors = this.service.getAll();
  }

}
