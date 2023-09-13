import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ThemeComponent } from './theme/theme/theme.component';
import { FormationListComponent } from './formation/formation-list/formation-list.component';
import { FormationDetailComponent } from './formation/formation-detail/formation-detail.component';
import { FormationAdminComponent } from './formation/formation-admin/formation-admin.component';
import { FormationAdminEditComponent } from './formation/formation-admin-edit/formation-admin-edit.component';
import { ThemeAdminComponent } from './theme/theme-admin/theme-admin.component';
import { RegistrationFormComponent } from './registration/registration-form/registration-form.component';
import { InscriptionFormComponent } from './registration/inscription-form/inscription-form.component';
import { PresenceComponent } from './registration/presence/presence.component';
import { EvaluationFormComponent } from './evaluation-form/evaluation-form/evaluation-form.component';

const routes: Routes = [
  { path: 'theme', component: ThemeComponent },
  { path: 'theme/admin', component: ThemeAdminComponent },
  { path: 'formation/admin', component: FormationAdminComponent },
  { path: 'formation/admin/edit/:id', component: FormationAdminEditComponent },
  { path: 'formation/admin/insert', component: FormationAdminEditComponent },
  { path: 'formation/:id', component: FormationListComponent },
  { path: 'formation/detail/:id', component: FormationDetailComponent },
  { path: 'registration', component: RegistrationFormComponent },
  { path: 'IT-presence', component: PresenceComponent },

  {
    path: 'registration/inscription-form',
    component: InscriptionFormComponent,
  },
  { path: 'evaluation-form', component: EvaluationFormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
