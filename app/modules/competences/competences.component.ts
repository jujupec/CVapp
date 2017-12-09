import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'competences',
    templateUrl: 'modules/competences/competences.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CompetencesComponent {
    competences: any[] = [
        {langage:"Angular 2", utilisation:"5 mois de pratique en stage (+ HTML / CSS )"},
        {langage:"C, C# ", utilisation:"Création d’un programme permettant la création de portefeuille (tableurs excel) dans le cadre d’un projet de 4ème année"},
        {langage:"Swift", utilisation:"Appris seul dans le cadre de la filière Entreprendre"},
        {langage:"SQL", utilisation:"Appris depuis la prépa"}
    ];
}