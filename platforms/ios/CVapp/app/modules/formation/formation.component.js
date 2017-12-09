"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var FormationComponent = (function () {
    function FormationComponent() {
        this.formation = [
            { date: "2015 – Actuel", ecole: "ESILV, Ecole Supérieure Léonard de Vinci – La Défense – Courbevoie 92400 , France", diplome: "Préparation à l’obtention du diplôme d’ingénieur généraliste numérique Spécialité : Big Data et objets connectés – Parcours Entreprendre (Double diplôme)" },
            { date: "2013 – 2015", diplome: "Classe Préparatoire Math Sup Math Spé", ecole: "Lycée militaire d’Aix en Provence (internat) – Aix-en-Provence 13100, France" },
            { date: "2012 – 2013", diplome: "Baccalauréat Scientifique – Mention Assez Bien, spécialité mathématiques", ecole: "Lycée Montalembert – Courbevoie 92400, France" }
        ];
    }
    return FormationComponent;
}());
FormationComponent = __decorate([
    core_1.Component({
        selector: 'formation',
        templateUrl: 'modules/formation/formation.component.html',
        changeDetection: core_1.ChangeDetectionStrategy.OnPush
    })
], FormationComponent);
exports.FormationComponent = FormationComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybWF0aW9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImZvcm1hdGlvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBbUU7QUFPbkUsSUFBYSxrQkFBa0I7SUFML0I7UUFNRSxjQUFTLEdBQVU7WUFDakIsRUFBQyxJQUFJLEVBQUMsZUFBZSxFQUFFLEtBQUssRUFBQyxzRkFBc0YsRUFBRSxPQUFPLEVBQUMsc0tBQXNLLEVBQUM7WUFDcFMsRUFBQyxJQUFJLEVBQUMsYUFBYSxFQUFFLE9BQU8sRUFBQyx5Q0FBeUMsRUFBRSxLQUFLLEVBQUMsK0VBQStFLEVBQUM7WUFDOUosRUFBQyxJQUFJLEVBQUMsYUFBYSxFQUFFLE9BQU8sRUFBQyw4RUFBOEUsRUFBRSxLQUFLLEVBQUMsZ0RBQWdELEVBQUM7U0FDckssQ0FBQztJQUNKLENBQUM7SUFBRCx5QkFBQztBQUFELENBQUMsQUFORCxJQU1DO0FBTlksa0JBQWtCO0lBTDlCLGdCQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsV0FBVztRQUNyQixXQUFXLEVBQUUsNENBQTRDO1FBQ3pELGVBQWUsRUFBRSw4QkFBdUIsQ0FBQyxNQUFNO0tBQ2hELENBQUM7R0FDVyxrQkFBa0IsQ0FNOUI7QUFOWSxnREFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2Zvcm1hdGlvbicsXG4gIHRlbXBsYXRlVXJsOiAnbW9kdWxlcy9mb3JtYXRpb24vZm9ybWF0aW9uLmNvbXBvbmVudC5odG1sJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcbn0pXG5leHBvcnQgY2xhc3MgRm9ybWF0aW9uQ29tcG9uZW50IHtcbiAgZm9ybWF0aW9uOiBhbnlbXSA9IFtcbiAgICB7ZGF0ZTpcIjIwMTUg4oCTIEFjdHVlbFwiLCBlY29sZTpcIkVTSUxWLCBFY29sZSBTdXBlzIFyaWV1cmUgTGXMgW9uYXJkIGRlIFZpbmNpIOKAkyBMYSBEZcyBZmVuc2Ug4oCTIENvdXJiZXZvaWUgOTI0MDAgLCBGcmFuY2VcIiwgZGlwbG9tZTpcIlByZcyBcGFyYXRpb24gYcyAIGzigJlvYnRlbnRpb24gZHUgZGlwbG/Mgm1lIGTigJlpbmdlzIFuaWV1ciBnZcyBbmXMgXJhbGlzdGUgbnVtZcyBcmlxdWUgU3BlzIFjaWFsaXRlzIEgOiBCaWcgRGF0YSBldCBvYmpldHMgY29ubmVjdGXMgXMg4oCTIFBhcmNvdXJzIEVudHJlcHJlbmRyZSAoRG91YmxlIGRpcGxvzIJtZSlcIn0sXG4gICAge2RhdGU6XCIyMDEzIOKAkyAyMDE1XCIsIGRpcGxvbWU6XCJDbGFzc2UgUHJlzIFwYXJhdG9pcmUgTWF0aCBTdXAgTWF0aCBTcGXMgVwiLCBlY29sZTpcIkx5Y2XMgWUgbWlsaXRhaXJlIGTigJlBaXggZW4gUHJvdmVuY2UgKGludGVybmF0KSDigJMgQWl4LWVuLVByb3ZlbmNlIDEzMTAwLCBGcmFuY2VcIn0sXG4gICAge2RhdGU6XCIyMDEyIOKAkyAyMDEzXCIsIGRpcGxvbWU6XCJCYWNjYWxhdXJlzIFhdCBTY2llbnRpZmlxdWUg4oCTIE1lbnRpb24gQXNzZXogQmllbiwgc3BlzIFjaWFsaXRlzIEgbWF0aGXMgW1hdGlxdWVzXCIsIGVjb2xlOlwiTHljZcyBZSBNb250YWxlbWJlcnQg4oCTIENvdXJiZXZvaWUgOTI0MDAsIEZyYW5jZVwifVxuICBdO1xufVxuIl19