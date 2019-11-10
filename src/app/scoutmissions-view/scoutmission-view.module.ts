import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from "@angular/core";

import { ScoutMissionStore } from './stores/scoutmission.store';
import { ScoutMissionService } from './services/scoutmission.service';
import { ClientStore } from './stores/client.store';
import { ClientService } from './services/client.service';
import { ScoutMissionViewComponent } from './scoutmission-view.component';
import { ScoutMissionPersistence } from './persistence/scoutmission.persistance';
import { PersistenceHelper } from '../general/persistence/persistence-helper';
import { ServiceHelper } from '../general/services/service-helper';
import { ClientPersistence } from './persistence/client.persistance';

@NgModule({
    declarations: [
        ScoutMissionViewComponent,
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
    ],
    exports: [
        ScoutMissionViewComponent
    ],
    providers: [
        ClientService,
        ClientStore,
        ScoutMissionService,
        ScoutMissionStore,
        ScoutMissionPersistence,
        ClientPersistence,
        PersistenceHelper,
        ServiceHelper,
    ]
})
export class ScoutMissionViewModule {}