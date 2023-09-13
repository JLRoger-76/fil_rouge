import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkillAdminComponent } from './skill-admin/skill-admin.component';
import { SkillAdminEditComponent } from './skill-admin-edit/skill-admin-edit.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { NavbarModule } from "../navbar/navbar.module";

@NgModule({
    declarations: [
        SkillAdminComponent,
        SkillAdminEditComponent,
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        AppRoutingModule,
        NavbarModule
    ]
})
export class SkillModule { }
