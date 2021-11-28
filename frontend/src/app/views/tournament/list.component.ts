import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { Tournament } from "../../model/tournament.model";
import { TournamentRepository } from "../../model/tournament.repository";

@Component({
    selector: "list-tournament",
    templateUrl: "list.component.html"
})

export class ListComponent {

    constructor(private repository: TournamentRepository,
        private router: Router) 
    { }

    get tournamentList(): Tournament[] {
        return this.repository.getTournament();        
    }

    deleteMethod(id: string) {
        if(confirm("Are you sure do you want to delete?")) {
            this.router.navigateByUrl("tournament/delete/"+id);
        }
    }
    
}