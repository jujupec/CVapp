import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'contact',
    templateUrl: 'modules/contact/contact.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactComponent {
    text: string = '+336776802 77 julienalbenque@gmail.com 04 / 05 / 1994';
}
