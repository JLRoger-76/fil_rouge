import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ThemeModule } from './theme/theme.module';
import { FormationModule } from './formation/formation.module';
import { ThemeAdminComponent } from './theme/theme-admin/theme-admin.component';
import { InstructorModule } from './instructor/instructor.module';
import { SkillModule } from './skill/skill.module';


@NgModule({
  declarations: [
    AppComponent,
    ThemeAdminComponent,
  ],
  imports: [
    BrowserModule,    
    AppRoutingModule,
    FormationModule,
    InstructorModule,
    SkillModule,
    ThemeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
