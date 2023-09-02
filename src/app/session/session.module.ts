import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SessionAdminComponent } from './session-admin/session-admin.component';
import { SessionAdminEditComponent } from './session-admin-edit/session-admin-edit.component';



@NgModule({
  declarations: [
    SessionAdminComponent,
    SessionAdminEditComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SessionModule { }
