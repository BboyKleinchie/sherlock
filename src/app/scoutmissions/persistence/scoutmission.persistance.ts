import { Injectable } from '@angular/core';

import { LOCAL_STORAGE_KEY } from '../../general/constants/storage.constants';
import { IScoutMission } from '../models/scoutmission.model';
import { PersistenceHelper } from '../../general/persistence/persistence-helper';

/*
    Used to persist the data to Local Storage
*/
@Injectable()
export abstract class ScoutMissionPersistence {
    constructor (private persistenceHelper: PersistenceHelper<IScoutMission>){ }

    public retrieve(): IScoutMission[] {
        return this.persistenceHelper.retrieve(LOCAL_STORAGE_KEY.SCOUTMISSION);
    }

    public store(scoutmissions: IScoutMission[]): void {
        this.persistenceHelper.store(LOCAL_STORAGE_KEY.SCOUTMISSION, scoutmissions);
    }
}