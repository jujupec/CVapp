import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'formation',
  templateUrl: 'modules/formation/formation.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormationComponent {
  formation: any[] = [
    {date:"2015 – Actuel", ecole:"ESILV, Ecole Supérieure Léonard de Vinci – La Défense – Courbevoie 92400 , France", diplome:"Préparation à l’obtention du diplôme d’ingénieur généraliste numérique Spécialité : Big Data et objets connectés – Parcours Entreprendre (Double diplôme)"},
    {date:"2013 – 2015", diplome:"Classe Préparatoire Math Sup Math Spé", ecole:"Lycée militaire d’Aix en Provence (internat) – Aix-en-Provence 13100, France"},
    {date:"2012 – 2013", diplome:"Baccalauréat Scientifique – Mention Assez Bien, spécialité mathématiques", ecole:"Lycée Montalembert – Courbevoie 92400, France"}
  ];
}
