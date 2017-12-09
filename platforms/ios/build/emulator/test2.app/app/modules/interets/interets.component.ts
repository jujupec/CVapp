import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'interets',
    templateUrl: 'modules/interets/interets.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class InteretsComponent {
    text: string = 'Interets Page';
}
