import { Injectable } from '@angular/core';

import { API_ENDPOINTS } from '../../general/constants/api-paths';
import { IScoutMission } from '../models/scoutmission.model';
import { IServiceGET } from '../../general/services/service.interface';
import { ServiceHelper } from '../../general/services/service-helper';
import { ScoutMissionPersistence } from '../persistence/scoutmission.persistance';

@Injectable()
export class ScoutMissionService implements IServiceGET<IScoutMission> {
    constructor (
        private serviceHelper: ServiceHelper<IScoutMission>,
        private scoutMissionPersistence: ScoutMissionPersistence,
    ) { }

    public getAll(): Promise<IScoutMission[]> {
        const scoutMissionCache = this.scoutMissionPersistence.retrieve();
        if(scoutMissionCache) { return Promise.resolve(scoutMissionCache); }

        return this.serviceHelper.getAll(API_ENDPOINTS.SCOUT_MISSION);
    }
}