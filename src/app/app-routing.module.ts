import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ThemeComponent } from './theme/theme/theme.component';
import { FormationListComponent } from './formation/formation-list/formation-list.component';
import { FormationDetailComponent } from './formation/formation-detail/formation-detail.component';
import { FormationAdminComponent } from './formation/formation-admin/formation-admin.component';
import { FormationAdminEditComponent } from './formation/formation-admin-edit/formation-admin-edit.component';
import { ThemeAdminComponent } from './theme/theme-admin/theme-admin.component';
import { InstructorAdminComponent } from './instructor/instructor-admin/instructor-admin.component';
import { InstructorAdminEditComponent } from './instructor/instructor-admin-edit/instructor-admin-edit.component';
import { SkillAdminEditComponent } from './skill/skill-admin-edit/skill-admin-edit.component';
import { SessionAdminComponent } from './session/session-admin/session-admin.component';
import { SessionAdminEditComponent } from './session/session-admin-edit/session-admin-edit.component';
import { SkillAdminComponent } from './skill/skill-admin/skill-admin.component';
import { RegistrationFormComponent } from './registration/registration-form/registration-form.component';
import { InscriptionFormComponent } from './registration/inscription-form/inscription-form.component';
import { PresenceComponent } from './registration/presence/presence.component';
import { EvaluationFormComponent } from './evaluation-form/evaluation-form/evaluation-form.component';
import { EvalsessionAdminComponent } from './evaluation-form/evalsession-admin/evalsession-admin.component';


const routes: Routes = [ 
  {   path: 'registration/:id', component: RegistrationFormComponent },
  {   path: 'IT-presence', component: PresenceComponent },
  {   path: 'theme', component: ThemeComponent },
  {   path: 'theme/admin', component: ThemeAdminComponent},
  {   path: 'formation/admin', component: FormationAdminComponent},
  {   path: 'instructor/admin', component: InstructorAdminComponent},
  {   path: 'session/admin', component: SessionAdminComponent},
  {   path: 'session/admin/edit/:id', component: SessionAdminEditComponent},
  {   path: 'instructor/admin/edit/:id', component: InstructorAdminEditComponent},
  {   path: 'skill/admin/edit/:id', component: SkillAdminEditComponent},
  {   path: 'formation/admin/edit/:id', component: FormationAdminEditComponent },
  {   path: 'formation/admin/insert', component: FormationAdminEditComponent },
  {   path: 'instructor/admin/insert', component: InstructorAdminEditComponent },
  {   path: 'session/admin/insert', component: SessionAdminEditComponent },
  {   path: 'formation/:id', component: FormationListComponent },
  {   path: 'formation/detail/:id', component: FormationDetailComponent },
  {   path: 'evalsession/admin/:id',component:EvalsessionAdminComponent},
  {   path: '', redirectTo: '/theme', pathMatch: 'full'},
  {   path: 'registration/inscription-form',component: InscriptionFormComponent,
  },
  {   path: 'evaluation-form', component: EvaluationFormComponent },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
