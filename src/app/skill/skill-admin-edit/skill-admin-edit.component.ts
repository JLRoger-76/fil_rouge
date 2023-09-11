import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Instructor } from 'src/app/instructor/instructor';
import { InstructorService } from 'src/app/instructor/instructor.service';
import { Skill } from '../skill';

@Component({
  selector: 'app-skill-admin-edit',
  templateUrl: './skill-admin-edit.component.html',
  styleUrls: ['./skill-admin-edit.component.css']
})
export class SkillAdminEditComponent implements OnInit {
  constructor(private route: ActivatedRoute,private service: InstructorService){};
  
  instructor:Instructor=<Instructor>{};
  skills:Skill[]=[];
  instructorSkills:Skill[]=[];
  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    if (id){  
      console.log(id) 
      this.instructor = this.service.getInstructorById(id) as Instructor;
      this.instructorSkills = this.instructor.skill;
    } 
    
  }
}
