import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormationListComponent } from './formation-list/formation-list.component';
import { FormationDetailComponent } from './formation-detail/formation-detail.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { FormationAdminComponent } from './formation-admin/formation-admin.component';
import { FormationAdminEditComponent } from './formation-admin-edit/formation-admin-edit.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { NavbarModule } from '../navbar/navbar.module';

@NgModule({
  declarations: [
    FormationListComponent,
    FormationDetailComponent,
    FormationAdminComponent,
    FormationAdminEditComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NavbarModule,
    AppRoutingModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class FormationModule { }
