import { Component,OnInit } from '@angular/core';
import { Training } from '../formation';
import { ActivatedRoute } from '@angular/router';
import { FormationService } from '../formation.service';
import { FormGroup, FormControl,Validators } from '@angular/forms';

@Component({
  selector: 'app-formation-admin-edit',
  templateUrl: './formation-admin-edit.component.html',
  styleUrls: ['./formation-admin-edit.component.css']
})

export class FormationAdminEditComponent  implements OnInit{
  constructor(private service: FormationService,private route: ActivatedRoute) { } 
  
  trainingForm = new FormGroup({
    id:new FormControl(0,{ nonNullable: true, validators: Validators.required }),
    title: new FormControl('',{ nonNullable: true, validators:[Validators.required,Validators.minLength(3)]}),
    price: new FormControl(0,{ nonNullable: true, validators:Validators.required}),
    theme:new FormControl([''],{ nonNullable: true, validators:Validators.required}),
    content: new FormControl('',{ nonNullable: true, validators:[Validators.required,Validators.minLength(3)]}),
  });
  
  get f(){
    return this.trainingForm.controls;
  }

  training:Training=<Training>{};
  selectedThemes: any =<any> {};
  
  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    if (id){
      //this.service.getById(id).subscribe((data: Training)=>{
      //  console.log(data);
      //  this.training = data;
      //}) 
      this.training=this.service.getTrainingById(id)!;
      this.trainingForm.setValue(this.training)
    } 
     this.selectedThemes=this.service.getselectedThemesOfTraining(id); 
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.trainingForm.value);
    this.service.create(this.trainingForm.getRawValue()).subscribe(res => {
      console.log('Theme created!');
  });
};
}


