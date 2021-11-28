import { Injectable } from "@angular/core";
import { Tournament } from "./tournament.model";
import { ResponseModel } from "./response.model";
import { RestDataSource } from "./rest.datasource";

@Injectable()
export class TournamentRepository {
    private Tournament: Tournament[] = [];

    constructor(private dataSource: RestDataSource) {
        dataSource.getTournamentList().subscribe(data => {
            this.Tournament = data;
        });
    }

    getTournament(): Tournament[] {
        return this.Tournament;
    }

    getItem(id: string): Tournament {
        return (this.Tournament.find(item => item._id === id)!);
    }

    saveTournament(item: Tournament) {
        if (item._id == null || item._id == "") {
            this.dataSource.insertTournament(item)
                .subscribe(p => this.Tournament.push(p));
        } else {
            this.dataSource.updateTournament(item)
                .subscribe(p => {
                    this.Tournament.splice(this.Tournament.
                        findIndex(i => i._id == item._id), 1, item);
                });
        }
    }

    deleteTournament(id: string) {
        this.dataSource.deleteTournament(id).subscribe(response => {
            if (response.success) {
                this.Tournament.splice(this.Tournament.
                    findIndex(item => item._id == id), 1);                                
            }
            else{
                alert(response.message);
            }
        })
    }
}