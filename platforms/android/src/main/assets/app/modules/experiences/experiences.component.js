"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var ExperiencesComponent = (function () {
    function ExperiencesComponent() {
        this.experiences = [
            { date: "Avril – Septembre 2017", experience: "Stage de 5 mois – Développeur Web Angular 2 – Capgemini- Suresnes 92150 , France" },
            { date: "Juillet – août 2016", experience: "Ouvrier au secteur emboutissage – Usine PSA Peugeot Citroën – Poissy 78300, France" },
            { date: "Juillet 2015", experience: "Employé administratif à la comptabilité fournisseurs – PSA Peugeot Citroën – Tri et archivage de factures – Poissy 78300, France" },
            { date: "Depuis octobre 2015", experience: "Cours particuliers mathématiques, physique et SI à des Lycéens" }
        ];
    }
    return ExperiencesComponent;
}());
ExperiencesComponent = __decorate([
    core_1.Component({
        selector: 'experiences',
        templateUrl: 'modules/experiences/experiences.component.html',
        changeDetection: core_1.ChangeDetectionStrategy.OnPush
    })
], ExperiencesComponent);
exports.ExperiencesComponent = ExperiencesComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhwZXJpZW5jZXMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZXhwZXJpZW5jZXMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQW1FO0FBT25FLElBQWEsb0JBQW9CO0lBTGpDO1FBTUUsZ0JBQVcsR0FBVTtZQUNuQixFQUFDLElBQUksRUFBQyx3QkFBd0IsRUFBRSxVQUFVLEVBQUMsbUZBQW1GLEVBQUM7WUFDL0gsRUFBQyxJQUFJLEVBQUMsc0JBQXNCLEVBQUUsVUFBVSxFQUFDLHFGQUFxRixFQUFDO1lBQy9ILEVBQUMsSUFBSSxFQUFDLGNBQWMsRUFBRSxVQUFVLEVBQUMsc0lBQXNJLEVBQUM7WUFDeEssRUFBQyxJQUFJLEVBQUMscUJBQXFCLEVBQUUsVUFBVSxFQUFDLG1FQUFtRSxFQUFDO1NBQzdHLENBQUM7SUFNSixDQUFDO0lBQUQsMkJBQUM7QUFBRCxDQUFDLEFBWkQsSUFZQztBQVpZLG9CQUFvQjtJQUxoQyxnQkFBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLGFBQWE7UUFDdkIsV0FBVyxFQUFFLGdEQUFnRDtRQUM3RCxlQUFlLEVBQUUsOEJBQXVCLENBQUMsTUFBTTtLQUNoRCxDQUFDO0dBQ1csb0JBQW9CLENBWWhDO0FBWlksb0RBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdleHBlcmllbmNlcycsXG4gIHRlbXBsYXRlVXJsOiAnbW9kdWxlcy9leHBlcmllbmNlcy9leHBlcmllbmNlcy5jb21wb25lbnQuaHRtbCcsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXG59KVxuZXhwb3J0IGNsYXNzIEV4cGVyaWVuY2VzQ29tcG9uZW50IHtcbiAgZXhwZXJpZW5jZXM6IGFueVtdID0gW1xuICAgIHtkYXRlOlwiQXZyaWwg4oCTIFNlcHRlbWJyZSAyMDE3XCIsIGV4cGVyaWVuY2U6XCJTdGFnZSBkZSA1IG1vaXMg4oCTIERlzIF2ZWxvcHBldXIgV2ViIEFuZ3VsYXIgMiDigJMgQ2FwZ2VtaW5pLSBTdXJlc25lcyA5MjE1MCAsIEZyYW5jZVwifSxcbiAgICB7ZGF0ZTpcIkp1aWxsZXQg4oCTIGFvdcyCdCAyMDE2XCIsIGV4cGVyaWVuY2U6XCJPdXZyaWVyIGF1IHNlY3RldXIgZW1ib3V0aXNzYWdlIOKAkyBVc2luZSBQU0EgUGV1Z2VvdCBDaXRyb2XMiG4g4oCTIFBvaXNzeSA3ODMwMCwgRnJhbmNlXCJ9LFxuICAgIHtkYXRlOlwiSnVpbGxldCAyMDE1XCIsIGV4cGVyaWVuY2U6XCJFbXBsb3llzIEgYWRtaW5pc3RyYXRpZiBhzIAgbGEgY29tcHRhYmlsaXRlzIEgZm91cm5pc3NldXJzIOKAkyBQU0EgUGV1Z2VvdCBDaXRyb2XMiG4g4oCTIFRyaSBldCBhcmNoaXZhZ2UgZGUgZmFjdHVyZXMg4oCTIFBvaXNzeSA3ODMwMCwgRnJhbmNlXCJ9LFxuICAgIHtkYXRlOlwiRGVwdWlzIG9jdG9icmUgMjAxNVwiLCBleHBlcmllbmNlOlwiQ291cnMgcGFydGljdWxpZXJzIG1hdGhlzIFtYXRpcXVlcywgcGh5c2lxdWUgZXQgU0kgYcyAIGRlcyBMeWNlzIFlbnNcIn1cbiAgXTtcbiAgXG4gIFxuICBcbiAgXG4gIFxufVxuIl19