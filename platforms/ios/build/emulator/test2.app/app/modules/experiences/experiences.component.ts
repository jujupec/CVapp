import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'experiences',
  templateUrl: 'modules/experiences/experiences.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExperiencesComponent {
  text: string = 'experiences Page';
}
