import { Component } from '@angular/core';
import { ThemeService } from '../theme.service';

@Component({
  selector: 'app-theme',
  templateUrl: './theme.component.html',
  styleUrls: ['./theme.component.css']
})

export class ThemeComponent {	
  constructor(private service: ThemeService) { } 
   	selectedThemes:any[]=this.showThemes(0);//initialise affiche domaines
	   idParent=this.service.idParent;
	
	showThemes(id:number) { 
		this.selectedThemes=this.service.getThemes(id);
		return this.selectedThemes;
	}	 
}
