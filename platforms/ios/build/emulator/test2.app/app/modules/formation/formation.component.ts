import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'formation',
  templateUrl: 'modules/formation/formation.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormationComponent {
  text: string = 'Cazertyu';
}
