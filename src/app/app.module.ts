import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ThemeModule } from './theme/theme.module';
import { FormationModule } from './formation/formation.module';
import { ThemeAdminComponent } from './theme/theme-admin/theme-admin.component';
import { InstructorModule } from './instructor/instructor.module';
import { SkillModule } from './skill/skill.module';
import { SessionModule } from './session/session.module';
import { NavbarModule } from "./navbar/navbar.module";


@NgModule({
    declarations: [
        AppComponent,
        ThemeAdminComponent,
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormationModule,
        InstructorModule,
        SessionModule,
        SkillModule,
        ThemeModule,
        NavbarModule
    ]
})
export class AppModule { }
