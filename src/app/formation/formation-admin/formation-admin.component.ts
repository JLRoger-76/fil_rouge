import { Component, OnInit } from '@angular/core';
import { Training } from '../formation';
import { FormationService } from '../formation.service';

@Component({
  selector: 'app-formation-admin',
  templateUrl: './formation-admin.component.html',
  styleUrls: ['./formation-admin.component.css']
})
export class FormationAdminComponent implements OnInit {
  constructor(private service: FormationService) { } 
  trainings: Training[] = [];
  
  ngOnInit(): void {
    //
    this.service.getAll2().subscribe((data: Training[])=>{
      console.log(data);
      this.trainings = data;
    }) 
    // 
    this.trainings = this.service.getAll();
  }
  
  onDelete(id:number){
    this.service.delete(id).subscribe(res => {
      console.log('Theme deleted!')    
    })
    this.service.getAll2().subscribe((data: Training[])=>{
      console.log(data);
      this.trainings = data;
    }) 
    this.service.deleteTraining(id);
    this.trainings = this.service.getAll();
  }

}
