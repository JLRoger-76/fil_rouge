import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ThemeComponent } from './theme/theme/theme.component';
import { FormationListComponent } from './formation/formation-list/formation-list.component';
import { FormationDetailComponent } from './formation/formation-detail/formation-detail.component';
import { FormationAdminComponent } from './formation/formation-admin/formation-admin.component';
import { FormationAdminEditComponent } from './formation/formation-admin-edit/formation-admin-edit.component';
import { ThemeAdminComponent } from './theme/theme-admin/theme-admin.component';

const routes: Routes = [
  {   path: 'theme', component: ThemeComponent },
  {   path: 'theme/admin', component: ThemeAdminComponent},
  {   path: 'formation/admin', component: FormationAdminComponent},
  {   path: 'formation/admin/edit/:id', component: FormationAdminEditComponent },
  {   path: 'formation/admin/insert', component: FormationAdminEditComponent },
  {   path: 'formation/:id', component: FormationListComponent },
  {   path: 'formation/detail/:id', component: FormationDetailComponent },
  
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
