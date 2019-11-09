import { NgModule } from "@angular/core";

import { ScoutMissionStore } from './stores/scoutmission.store';
import { ScoutMissionService } from './services/scoutmission.service';
import { ClientStore } from './stores/client.store';
import { ClientService } from './services/client.service';
import { ScoutMissionComponent } from './scoutmission.component';

@NgModule({
    declarations: [
        ScoutMissionComponent
    ],
    exports: [
        ScoutMissionComponent
    ],
    providers: [
        ClientService,
        ClientStore,
        ScoutMissionService,
        ScoutMissionStore
    ]
})
export class ScoutMissionModule {}