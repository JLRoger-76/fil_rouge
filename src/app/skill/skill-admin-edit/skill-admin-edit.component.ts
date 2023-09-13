import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Instructor } from 'src/app/instructor/instructor';
import { InstructorService } from 'src/app/instructor/instructor.service';
import { Skill } from '../skill';
import { Training } from 'src/app/formation/formation';
import { FormGroup, FormControl,Validators } from '@angular/forms';

@Component({
  selector: 'app-skill-admin-edit',
  templateUrl: './skill-admin-edit.component.html',
  styleUrls: ['./skill-admin-edit.component.css']
})
export class SkillAdminEditComponent implements OnInit {
  constructor(private route: ActivatedRoute, private service: InstructorService){};
  
  skillForm = new FormGroup({
    id:new FormControl(0),
    idInstructor:new FormControl(0),
    name: new FormControl(''),
    experience: new FormControl(0,Validators.required),
    idTraining:new FormControl(0)
  });

  public trainings:Array<Training>= this.service.getAllTraining();
  public selectedSkills:Array<any> = [];// skill avec nom formation
  public selectedSkill:any;
  
  instructor:Instructor=<Instructor>{};
  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    if (id){  
      console.log(id) 
      this.instructor = this.service.getInstructorById(id) as Instructor;
        
      this.instructor.skill.forEach(skill=> { 
        this.selectedSkill=skill;// skill avec nom de la formation
        let name=this.trainings.find(t=>t.id==skill.idTraining)?.title;
        this.selectedSkill.name=name;
        this.selectedSkills.push(this.selectedSkill);
        })
    }  
  }
  
  get f(){
    return this.skillForm.controls;
  }
  onEdit(selectedSkill:any){
    this.skillForm.setValue(selectedSkill)
  }
  onClear(){
    this.skillForm.reset();
  }
  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.skillForm.value);
  }
}
