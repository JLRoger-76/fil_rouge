import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SessionAdminComponent } from './session-admin/session-admin.component';
import { SessionAdminEditComponent } from './session-admin-edit/session-admin-edit.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    SessionAdminComponent,
    SessionAdminEditComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AppRoutingModule
  ]
})
export class SessionModule { }
