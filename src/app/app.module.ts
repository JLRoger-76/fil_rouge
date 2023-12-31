import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ThemeModule } from './theme/theme.module';
import { FormationModule } from './formation/formation.module';
import { ThemeAdminComponent } from './theme/theme-admin/theme-admin.component';
import { SkillModule } from './skill/skill.module';
import { SessionModule } from './session/session.module';
import { NavbarModule } from "./navbar/navbar.module";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegistrationModule } from './registration/registration.module';
import { RouterModule } from '@angular/router';
import { PresenceModule } from './registration/presence/presence/presence.module';
import { EvaluationFormModule } from './evaluation-form/evaluation-form.module';
import { InstructorModule } from './instructor/instructor.module';
import { AccueilModule } from './accueil/accueil.module';

import {HttpClientModule} from '@angular/common/http';

@NgModule({
    declarations: [
        AppComponent,
        ThemeAdminComponent,
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        HttpClientModule,
        AppRoutingModule,
        ReactiveFormsModule,
        AccueilModule,
        FormationModule,
        InstructorModule,
        SessionModule,
        SkillModule,
        ThemeModule,
        FormsModule,
        RegistrationModule,
        RouterModule,
        PresenceModule,
        EvaluationFormModule,
        NavbarModule

]

})
export class AppModule {}
