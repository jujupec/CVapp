import { NgModule } from '@angular/core';

import { NativeScriptModule } from 'nativescript-angular/nativescript.module';
import { CompetencesComponent } from './competences/competences.component'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormationComponent } from './formation/formation.component';
import { ExperiencesComponent } from './experiences/experiences.component';
import { ContactComponent } from './contact/contact.component';
import {InteretsComponent } from './interets/interets.component'
import { SharedModule } from './shared';

@NgModule({
  imports: [
    NativeScriptModule,
    AppRoutingModule,
    SharedModule
  ],
  declarations: [
    AppComponent,
    FormationComponent,
    ExperiencesComponent,
    ContactComponent,
    CompetencesComponent,
    InteretsComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}
