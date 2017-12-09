import { NgModule } from '@angular/core';

import { NativeScriptRouterModule } from 'nativescript-angular/router';

import { FormationComponent } from './formation/formation.component';
import { ExperiencesComponent } from './experiences/experiences.component';
import { ContactComponent } from './contact/contact.component';
import { CompetencesComponent } from './competences/competences.component'
import { InteretsComponent } from './interets/interets.component'

@NgModule({
  imports: [
    NativeScriptRouterModule.forRoot([
      { path: '', component: ContactComponent },
      { path: 'experiences', component: ExperiencesComponent },
      { path: 'formation', component: FormationComponent },
      { path:'competences', component: CompetencesComponent },
      { path: 'interets', component: InteretsComponent }

    ])
  ],
  exports: [NativeScriptRouterModule]
})
export class AppRoutingModule {

}
