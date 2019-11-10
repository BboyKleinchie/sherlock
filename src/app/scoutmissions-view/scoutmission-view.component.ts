import { isEmpty } from 'lodash';
import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subject } from 'rxjs';

import { ScoutMissionPersistence } from './persistence/scoutmission.persistance';
import { ScoutMissionStore } from './stores/scoutmission.store';
import { ScoutMissionService } from './services/scoutmission.service';
import { IScoutMission } from './models/scoutmission.model';
import { IClient } from './models/client.model';
import { ClientStore } from './stores/client.store';
import { ClientPersistence } from './persistence/client.persistance';
import { ClientService } from './services/client.service';

@Component({
    selector: 'scoutmission-view',
    templateUrl: './scoutmission-view.component.html'
})
export class ScoutMissionViewComponent implements OnInit, OnDestroy {
    private destroyed: Subject<void>;
    private clients: IClient[];
    private scoutmissions: IScoutMission[];

    public constructor(
        private scoutMissionService: ScoutMissionService,
        private scoutMissionPersistence: ScoutMissionPersistence,
        private scoutMissionStore: ScoutMissionStore,
        private clientService: ClientService,
        private clientPersistence: ClientPersistence,
        private clientStore: ClientStore,
    ) { 
        this.destroyed = new Subject<void>();
    }

    public ngOnInit(): void {
        this.initScoutMissions();
        this.initClients();

        this.clientStore.subscribe(
            this.destroyed,
            (clients: IClient[]) => {
                this.clients = clients;
                console.log(clients);
            }
        );

        this.scoutMissionStore.subscribe(
            this.destroyed,
            (scoutmissions: IScoutMission[]) => {
                this.scoutmissions = scoutmissions;
                console.log(scoutmissions);
            }
        );
    }

    public ngOnDestroy(): void {
        this.destroyed.next();
        this.destroyed.complete();
    }

    private initScoutMissions(): void {
        this.scoutMissionService.getAll()
            .then((response: IScoutMission[]) => {
                if (isEmpty(response)) { return; }

                this.scoutMissionStore.setStoreResults(response);
                this.scoutMissionPersistence.store(response);
            })
            .catch((error: any) => {
                // log error here
                console.log(error);
            });
    }

    private initClients(): void {
        this.clientService.getAll()
            .then((response: IClient[]) => {
                if (isEmpty(response)) { return; }

                this.clientStore.setStoreResults(response);
                this.clientPersistence.store(response);
            })
            .catch((error: any) => {
                // log error here
                console.log(error);
            });
    }

}