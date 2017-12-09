import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'contact',
    templateUrl: 'modules/contact/contact.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactComponent {
    contact: any[] = [
        { name: 'telephone', value:'+33677680277' },
        { name: 'mail', value: 'julienalbenque@gmail.com' },
        { name: 'adresse', value: '1 av Georges Pompidou, Suresnes, 92150 France' }
      ];
}
