import { Component, OnInit } from '@angular/core';
import { ThemeService } from '../theme.service';
import { Theme } from '../theme';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-theme-admin',
  templateUrl: './theme-admin.component.html',
  styleUrls: ['./theme-admin.component.css'],
})


export class ThemeAdminComponent implements OnInit {
  constructor(private service: ThemeService) { } 

  themeForm = new FormGroup({
    id:new FormControl(0,{ nonNullable: true, validators: Validators.required }),
    name: new FormControl('',{ nonNullable: true, validators: [Validators.required, Validators.minLength(3)]}),
    parent:new FormControl('',{ nonNullable: true }),
    children:new FormControl([""],{ nonNullable: true }),
    formations:new FormControl([""],{ nonNullable: true })
  });

  themes: Theme[]=[];

  ngOnInit(): void {
    //
    this.service.getAll2().subscribe((data: Theme[])=>{
      console.log(data);
      this.themes = data;
    }) 
    // 
     //this.themes = this.service.getAll();
  }
  get f(){
    return this.themeForm.controls;
  }
  onEdit(theme:Theme){
    this.themeForm.setValue(theme)
  }

  onDelete(id:number){
    this.service.delete(id).subscribe(res => {
        console.log('Theme deleted!')    
    })
    //this.service.deleteTheme(id);
    this.service.getAll2().subscribe((data: Theme[])=>{
      console.log(data);
      this.themes = data;
    }) 
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.themeForm.value);
    this.service.create(this.themeForm.getRawValue()).subscribe(res => {
      console.log('Theme created!')
    })
  } 
}
