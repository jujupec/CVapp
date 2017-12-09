"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var competences_component_1 = require("./competences/competences.component");
var app_routing_module_1 = require("./app-routing.module");
var app_component_1 = require("./app.component");
var formation_component_1 = require("./formation/formation.component");
var experiences_component_1 = require("./experiences/experiences.component");
var contact_component_1 = require("./contact/contact.component");
var interets_component_1 = require("./interets/interets.component");
var shared_1 = require("./shared");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            nativescript_module_1.NativeScriptModule,
            app_routing_module_1.AppRoutingModule,
            shared_1.SharedModule
        ],
        declarations: [
            app_component_1.AppComponent,
            formation_component_1.FormationComponent,
            experiences_component_1.ExperiencesComponent,
            contact_component_1.ContactComponent,
            competences_component_1.CompetencesComponent,
            interets_component_1.InteretsComponent
        ],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBeUM7QUFFekMsZ0ZBQThFO0FBQzlFLDZFQUEwRTtBQUMxRSwyREFBd0Q7QUFDeEQsaURBQStDO0FBQy9DLHVFQUFxRTtBQUNyRSw2RUFBMkU7QUFDM0UsaUVBQStEO0FBQy9ELG9FQUFnRTtBQUNoRSxtQ0FBd0M7QUFrQnhDLElBQWEsU0FBUztJQUF0QjtJQUVBLENBQUM7SUFBRCxnQkFBQztBQUFELENBQUMsQUFGRCxJQUVDO0FBRlksU0FBUztJQWhCckIsZUFBUSxDQUFDO1FBQ1IsT0FBTyxFQUFFO1lBQ1Asd0NBQWtCO1lBQ2xCLHFDQUFnQjtZQUNoQixxQkFBWTtTQUNiO1FBQ0QsWUFBWSxFQUFFO1lBQ1osNEJBQVk7WUFDWix3Q0FBa0I7WUFDbEIsNENBQW9CO1lBQ3BCLG9DQUFnQjtZQUNoQiw0Q0FBb0I7WUFDcEIsc0NBQWlCO1NBQ2xCO1FBQ0QsU0FBUyxFQUFFLENBQUMsNEJBQVksQ0FBQztLQUMxQixDQUFDO0dBQ1csU0FBUyxDQUVyQjtBQUZZLDhCQUFTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgTmF0aXZlU2NyaXB0TW9kdWxlIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvbmF0aXZlc2NyaXB0Lm1vZHVsZSc7XG5pbXBvcnQgeyBDb21wZXRlbmNlc0NvbXBvbmVudCB9IGZyb20gJy4vY29tcGV0ZW5jZXMvY29tcGV0ZW5jZXMuY29tcG9uZW50J1xuaW1wb3J0IHsgQXBwUm91dGluZ01vZHVsZSB9IGZyb20gJy4vYXBwLXJvdXRpbmcubW9kdWxlJztcbmltcG9ydCB7IEFwcENvbXBvbmVudCB9IGZyb20gJy4vYXBwLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBGb3JtYXRpb25Db21wb25lbnQgfSBmcm9tICcuL2Zvcm1hdGlvbi9mb3JtYXRpb24uY29tcG9uZW50JztcbmltcG9ydCB7IEV4cGVyaWVuY2VzQ29tcG9uZW50IH0gZnJvbSAnLi9leHBlcmllbmNlcy9leHBlcmllbmNlcy5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ29udGFjdENvbXBvbmVudCB9IGZyb20gJy4vY29udGFjdC9jb250YWN0LmNvbXBvbmVudCc7XG5pbXBvcnQge0ludGVyZXRzQ29tcG9uZW50IH0gZnJvbSAnLi9pbnRlcmV0cy9pbnRlcmV0cy5jb21wb25lbnQnXG5pbXBvcnQgeyBTaGFyZWRNb2R1bGUgfSBmcm9tICcuL3NoYXJlZCc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBOYXRpdmVTY3JpcHRNb2R1bGUsXG4gICAgQXBwUm91dGluZ01vZHVsZSxcbiAgICBTaGFyZWRNb2R1bGVcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgQXBwQ29tcG9uZW50LFxuICAgIEZvcm1hdGlvbkNvbXBvbmVudCxcbiAgICBFeHBlcmllbmNlc0NvbXBvbmVudCxcbiAgICBDb250YWN0Q29tcG9uZW50LFxuICAgIENvbXBldGVuY2VzQ29tcG9uZW50LFxuICAgIEludGVyZXRzQ29tcG9uZW50XG4gIF0sXG4gIGJvb3RzdHJhcDogW0FwcENvbXBvbmVudF1cbn0pXG5leHBvcnQgY2xhc3MgQXBwTW9kdWxlIHtcblxufVxuIl19