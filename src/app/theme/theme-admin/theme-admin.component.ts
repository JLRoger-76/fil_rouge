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
    idTheme:new FormControl(0),
    name: new FormControl('',[Validators.required,Validators.minLength(3)]),
    idParent:new FormControl(0)
  });

  themes: Theme[] = [];
  editTheme:Theme=<Theme>{};
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
    this.editTheme=<Theme>{};
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
