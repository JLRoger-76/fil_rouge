import { Component,OnInit } from '@angular/core';
import { ThemeService } from '../theme.service';
import { Theme } from '../theme';
import { FormGroup, FormControl,Validators } from '@angular/forms';

@Component({
  selector: 'app-theme-admin',
  templateUrl: './theme-admin.component.html',
  styleUrls: ['./theme-admin.component.css']
})


export class ThemeAdminComponent implements OnInit {
  constructor(private service: ThemeService) { } 

  themeForm = new FormGroup({
    id:new FormControl(0),
    name: new FormControl('',[Validators.required,Validators.minLength(3)]),
    parent:new FormControl(''),
    children:new FormControl([""]),
    formations:new FormControl([""])
  });

  themes: Theme[] = this.service.getAll();

  ngOnInit(): void {
     this.themes = this.service.getAll();
  }
  get f(){
    return this.themeForm.controls;
  }
  onEdit(theme:Theme){
    this.themeForm.setValue(theme)
  }
  onClear(){
    this.themeForm.reset();
  }
  onDelete(id:number){
     this.service.deleteTheme(id);
     this.themes = this.service.getAll();
  }
  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.themeForm.value);
  }
}
