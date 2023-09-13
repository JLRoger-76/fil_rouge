import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PresenceComponent } from '../presence.component';
import { RouterModule } from '@angular/router';
@NgModule({
  declarations: [PresenceComponent],
  imports: [CommonModule, ReactiveFormsModule, FormsModule, RouterModule],
})
export class PresenceModule {}
