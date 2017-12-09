"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var CompetencesComponent = (function () {
    function CompetencesComponent() {
        this.competences = [
            { langage: "Angular 2", utilisation: "5 mois de pratique en stage (+ HTML / CSS )" },
            { langage: "C, C# ", utilisation: "Création d’un programme permettant la création de portefeuille (tableurs excel) dans le cadre d’un projet de 4ème année" },
            { langage: "Swift", utilisation: "Appris seul dans le cadre de la filière Entreprendre" },
            { langage: "SQL", utilisation: "Appris depuis la prépa" }
        ];
    }
    return CompetencesComponent;
}());
CompetencesComponent = __decorate([
    core_1.Component({
        selector: 'competences',
        templateUrl: 'modules/competences/competences.component.html',
        changeDetection: core_1.ChangeDetectionStrategy.OnPush
    })
], CompetencesComponent);
exports.CompetencesComponent = CompetencesComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcGV0ZW5jZXMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY29tcGV0ZW5jZXMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQW1FO0FBT25FLElBQWEsb0JBQW9CO0lBTGpDO1FBTUksZ0JBQVcsR0FBVTtZQUNqQixFQUFDLE9BQU8sRUFBQyxXQUFXLEVBQUUsV0FBVyxFQUFDLDZDQUE2QyxFQUFDO1lBQ2hGLEVBQUMsT0FBTyxFQUFDLFFBQVEsRUFBRSxXQUFXLEVBQUMsNkhBQTZILEVBQUM7WUFDN0osRUFBQyxPQUFPLEVBQUMsT0FBTyxFQUFFLFdBQVcsRUFBQyx1REFBdUQsRUFBQztZQUN0RixFQUFDLE9BQU8sRUFBQyxLQUFLLEVBQUUsV0FBVyxFQUFDLHdCQUF3QixFQUFDO1NBQ3hELENBQUM7SUFDTixDQUFDO0lBQUQsMkJBQUM7QUFBRCxDQUFDLEFBUEQsSUFPQztBQVBZLG9CQUFvQjtJQUxoQyxnQkFBUyxDQUFDO1FBQ1AsUUFBUSxFQUFFLGFBQWE7UUFDdkIsV0FBVyxFQUFFLGdEQUFnRDtRQUM3RCxlQUFlLEVBQUUsOEJBQXVCLENBQUMsTUFBTTtLQUNsRCxDQUFDO0dBQ1csb0JBQW9CLENBT2hDO0FBUFksb0RBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2NvbXBldGVuY2VzJyxcbiAgICB0ZW1wbGF0ZVVybDogJ21vZHVsZXMvY29tcGV0ZW5jZXMvY29tcGV0ZW5jZXMuY29tcG9uZW50Lmh0bWwnLFxuICAgIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXG59KVxuZXhwb3J0IGNsYXNzIENvbXBldGVuY2VzQ29tcG9uZW50IHtcbiAgICBjb21wZXRlbmNlczogYW55W10gPSBbXG4gICAgICAgIHtsYW5nYWdlOlwiQW5ndWxhciAyXCIsIHV0aWxpc2F0aW9uOlwiNSBtb2lzIGRlIHByYXRpcXVlIGVuIHN0YWdlICgrIEhUTUwgLyBDU1MgKVwifSxcbiAgICAgICAge2xhbmdhZ2U6XCJDLCBDIyBcIiwgdXRpbGlzYXRpb246XCJDcmXMgWF0aW9uIGTigJl1biBwcm9ncmFtbWUgcGVybWV0dGFudCBsYSBjcmXMgWF0aW9uIGRlIHBvcnRlZmV1aWxsZSAodGFibGV1cnMgZXhjZWwpIGRhbnMgbGUgY2FkcmUgZOKAmXVuIHByb2pldCBkZSA0ZcyAbWUgYW5uZcyBZVwifSxcbiAgICAgICAge2xhbmdhZ2U6XCJTd2lmdFwiLCB1dGlsaXNhdGlvbjpcIkFwcHJpcyBzZXVsIGRhbnMgbGUgY2FkcmUgZGUgbGEgZmlsaWXMgHJlIEVudHJlcHJlbmRyZVwifSxcbiAgICAgICAge2xhbmdhZ2U6XCJTUUxcIiwgdXRpbGlzYXRpb246XCJBcHByaXMgZGVwdWlzIGxhIHByw6lwYVwifVxuICAgIF07XG59Il19