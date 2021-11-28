import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";

import { TournamentRepository } from "./tournament.repository";
import { RestDataSource } from "./rest.datasource";
import { AuthService } from "./auth.service";

@NgModule({
    imports: [HttpClientModule],
    providers: [
        TournamentRepository,
        RestDataSource,
        AuthService      
    ]
})

export class ModelModule { }