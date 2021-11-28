import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";
import { Tournament } from "../../model/tournament.model";
import { TournamentRepository } from "../../model/tournament.repository";

@Component({
    selector: "add-edit",
    templateUrl: "add_edit.component.html"
})

export class AddEditComponent {

    editing: boolean = false;
    item: Tournament = new Tournament();

    constructor(private repository: TournamentRepository,
                private router: Router,
                activeRoute: ActivatedRoute) 
    { 
        if (activeRoute.snapshot.params["mode"] == "delete") {
            this.deleteItem(activeRoute.snapshot.params["id"]);
        }

        this.editing = activeRoute.snapshot.params["mode"] == "edit";
        
        if (this.editing) {
            this.item = repository.getItem(activeRoute.snapshot.params["id"]);
        }        
    }

    save(form: NgForm) {
        this.repository.saveTournament(this.item);
        this.router.navigateByUrl("tournament/list");
    }

    private deleteItem(id: string){
        this.repository.deleteTournament(id);
        this.router.navigateByUrl("tournament/list");
    }
    
}