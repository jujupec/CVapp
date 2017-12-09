"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var ContactComponent = (function () {
    function ContactComponent() {
        this.contact = [
            { name: 'telephone', value: '+33677680277' },
            { name: 'mail', value: 'julienalbenque@gmail.com' },
            { name: 'adresse', value: '1 av Georges Pompidou, Suresnes, 92150 France' }
        ];
    }
    return ContactComponent;
}());
ContactComponent = __decorate([
    core_1.Component({
        selector: 'contact',
        templateUrl: 'modules/contact/contact.component.html',
        changeDetection: core_1.ChangeDetectionStrategy.OnPush
    })
], ContactComponent);
exports.ContactComponent = ContactComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGFjdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjb250YWN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFtRTtBQU9uRSxJQUFhLGdCQUFnQjtJQUw3QjtRQU1JLFlBQU8sR0FBVTtZQUNiLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQUMsY0FBYyxFQUFFO1lBQzNDLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsMEJBQTBCLEVBQUU7WUFDbkQsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSwrQ0FBK0MsRUFBRTtTQUM1RSxDQUFDO0lBQ1IsQ0FBQztJQUFELHVCQUFDO0FBQUQsQ0FBQyxBQU5ELElBTUM7QUFOWSxnQkFBZ0I7SUFMNUIsZ0JBQVMsQ0FBQztRQUNQLFFBQVEsRUFBRSxTQUFTO1FBQ25CLFdBQVcsRUFBRSx3Q0FBd0M7UUFDckQsZUFBZSxFQUFFLDhCQUF1QixDQUFDLE1BQU07S0FDbEQsQ0FBQztHQUNXLGdCQUFnQixDQU01QjtBQU5ZLDRDQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdjb250YWN0JyxcbiAgICB0ZW1wbGF0ZVVybDogJ21vZHVsZXMvY29udGFjdC9jb250YWN0LmNvbXBvbmVudC5odG1sJyxcbiAgICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcbmV4cG9ydCBjbGFzcyBDb250YWN0Q29tcG9uZW50IHtcbiAgICBjb250YWN0OiBhbnlbXSA9IFtcbiAgICAgICAgeyBuYW1lOiAndGVsZXBob25lJywgdmFsdWU6JyszMzY3NzY4MDI3NycgfSxcbiAgICAgICAgeyBuYW1lOiAnbWFpbCcsIHZhbHVlOiAnanVsaWVuYWxiZW5xdWVAZ21haWwuY29tJyB9LFxuICAgICAgICB7IG5hbWU6ICdhZHJlc3NlJywgdmFsdWU6ICcxIGF2IEdlb3JnZXMgUG9tcGlkb3UsIFN1cmVzbmVzLCA5MjE1MCBGcmFuY2UnIH1cbiAgICAgIF07XG59XG4iXX0=