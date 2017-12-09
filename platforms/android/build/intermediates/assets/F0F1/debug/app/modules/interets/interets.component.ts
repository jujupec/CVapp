import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'interets',
    templateUrl: 'modules/interets/interets.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class InteretsComponent {
    interets: any = {sejour:"Etats-Unis (New-York, Chicago, Côte Ouest), Canada (Montréal), Londres (Séjours linguistiques)", activite:"Musculation, snowboard, basket, cinéma"};
}
