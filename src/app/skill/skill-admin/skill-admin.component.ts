import { Component, OnInit } from '@angular/core';
import { SkillService } from '../skill.service';
import { Skill } from '../skill';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-skill-admin',
  templateUrl: './skill-admin.component.html',
  styleUrls: ['./skill-admin.component.css']
})
export class SkillAdminComponent implements OnInit {
  constructor( private service:SkillService) { } 
  
  skillForm = new FormGroup({
    id:new FormControl(0),
    name: new FormControl('',[Validators.required,Validators.minLength(3)]),
    experience:new FormControl(0)
  });
  skills: Skill[] = [];
  
  ngOnInit(): void {
    this.skills = this.service.getAll();
  }
  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.skillForm.value);
  }

  onEdit(skill:Skill){
   //this.skillForm.setValue(skill)
  }
  onDelete(id:number){
    //this.service.deleteTheme(id);
    this.skills = this.service.getAll();
 }
}
