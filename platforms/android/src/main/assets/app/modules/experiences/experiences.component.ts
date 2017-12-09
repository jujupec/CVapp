import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'experiences',
  templateUrl: 'modules/experiences/experiences.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExperiencesComponent {
  experiences: any[] = [
    {date:"Avril – Septembre 2017", experience:"Stage de 5 mois – Développeur Web Angular 2 – Capgemini- Suresnes 92150 , France"},
    {date:"Juillet – août 2016", experience:"Ouvrier au secteur emboutissage – Usine PSA Peugeot Citroën – Poissy 78300, France"},
    {date:"Juillet 2015", experience:"Employé administratif à la comptabilité fournisseurs – PSA Peugeot Citroën – Tri et archivage de factures – Poissy 78300, France"},
    {date:"Depuis octobre 2015", experience:"Cours particuliers mathématiques, physique et SI à des Lycéens"}
  ];
  
  
  
  
  
}
