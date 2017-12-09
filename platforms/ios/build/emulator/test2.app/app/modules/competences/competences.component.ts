import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'competences',
    templateUrl: 'modules/competences/competences.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CompetencesComponent {
    text: string = 'Compétences Page';
}
