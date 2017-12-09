"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var formation_component_1 = require("./formation/formation.component");
var experiences_component_1 = require("./experiences/experiences.component");
var contact_component_1 = require("./contact/contact.component");
var competences_component_1 = require("./competences/competences.component");
var interets_component_1 = require("./interets/interets.component");
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    core_1.NgModule({
        imports: [
            router_1.NativeScriptRouterModule.forRoot([
                { path: '', component: contact_component_1.ContactComponent },
                { path: 'experiences', component: experiences_component_1.ExperiencesComponent },
                { path: 'formation', component: formation_component_1.FormationComponent },
                { path: 'competences', component: competences_component_1.CompetencesComponent },
                { path: 'interets', component: interets_component_1.InteretsComponent }
            ])
        ],
        exports: [router_1.NativeScriptRouterModule]
    })
], AppRoutingModule);
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLXJvdXRpbmcubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwLXJvdXRpbmcubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXlDO0FBRXpDLHNEQUF1RTtBQUV2RSx1RUFBcUU7QUFDckUsNkVBQTJFO0FBQzNFLGlFQUErRDtBQUMvRCw2RUFBMEU7QUFDMUUsb0VBQWlFO0FBZWpFLElBQWEsZ0JBQWdCO0lBQTdCO0lBRUEsQ0FBQztJQUFELHVCQUFDO0FBQUQsQ0FBQyxBQUZELElBRUM7QUFGWSxnQkFBZ0I7SUFiNUIsZUFBUSxDQUFDO1FBQ1IsT0FBTyxFQUFFO1lBQ1AsaUNBQXdCLENBQUMsT0FBTyxDQUFDO2dCQUMvQixFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsU0FBUyxFQUFFLG9DQUFnQixFQUFFO2dCQUN6QyxFQUFFLElBQUksRUFBRSxhQUFhLEVBQUUsU0FBUyxFQUFFLDRDQUFvQixFQUFFO2dCQUN4RCxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsU0FBUyxFQUFFLHdDQUFrQixFQUFFO2dCQUNwRCxFQUFFLElBQUksRUFBQyxhQUFhLEVBQUUsU0FBUyxFQUFFLDRDQUFvQixFQUFFO2dCQUN2RCxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLHNDQUFpQixFQUFFO2FBRW5ELENBQUM7U0FDSDtRQUNELE9BQU8sRUFBRSxDQUFDLGlDQUF3QixDQUFDO0tBQ3BDLENBQUM7R0FDVyxnQkFBZ0IsQ0FFNUI7QUFGWSw0Q0FBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXInO1xuXG5pbXBvcnQgeyBGb3JtYXRpb25Db21wb25lbnQgfSBmcm9tICcuL2Zvcm1hdGlvbi9mb3JtYXRpb24uY29tcG9uZW50JztcbmltcG9ydCB7IEV4cGVyaWVuY2VzQ29tcG9uZW50IH0gZnJvbSAnLi9leHBlcmllbmNlcy9leHBlcmllbmNlcy5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ29udGFjdENvbXBvbmVudCB9IGZyb20gJy4vY29udGFjdC9jb250YWN0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDb21wZXRlbmNlc0NvbXBvbmVudCB9IGZyb20gJy4vY29tcGV0ZW5jZXMvY29tcGV0ZW5jZXMuY29tcG9uZW50J1xuaW1wb3J0IHsgSW50ZXJldHNDb21wb25lbnQgfSBmcm9tICcuL2ludGVyZXRzL2ludGVyZXRzLmNvbXBvbmVudCdcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZS5mb3JSb290KFtcbiAgICAgIHsgcGF0aDogJycsIGNvbXBvbmVudDogQ29udGFjdENvbXBvbmVudCB9LFxuICAgICAgeyBwYXRoOiAnZXhwZXJpZW5jZXMnLCBjb21wb25lbnQ6IEV4cGVyaWVuY2VzQ29tcG9uZW50IH0sXG4gICAgICB7IHBhdGg6ICdmb3JtYXRpb24nLCBjb21wb25lbnQ6IEZvcm1hdGlvbkNvbXBvbmVudCB9LFxuICAgICAgeyBwYXRoOidjb21wZXRlbmNlcycsIGNvbXBvbmVudDogQ29tcGV0ZW5jZXNDb21wb25lbnQgfSxcbiAgICAgIHsgcGF0aDogJ2ludGVyZXRzJywgY29tcG9uZW50OiBJbnRlcmV0c0NvbXBvbmVudCB9XG5cbiAgICBdKVxuICBdLFxuICBleHBvcnRzOiBbTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlXVxufSlcbmV4cG9ydCBjbGFzcyBBcHBSb3V0aW5nTW9kdWxlIHtcblxufVxuIl19