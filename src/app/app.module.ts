import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ThemeModule } from './theme/theme.module';
import { FormationModule } from './formation/formation.module';
import { ThemeAdminComponent } from './theme/theme-admin/theme-admin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegistrationModule } from './registration/registration.module';
import { RouterModule } from '@angular/router';
import { PresenceComponent } from './registration/presence/presence.component';
import { PresenceModule } from './registration/presence/presence/presence.module';
import { EvaluationFormModule } from './evaluation-form/evaluation-form.module';

@NgModule({
  declarations: [AppComponent, ThemeAdminComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormationModule,
    ThemeModule,
    ReactiveFormsModule,
    FormsModule,
    RegistrationModule,
    RouterModule,
    PresenceModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
