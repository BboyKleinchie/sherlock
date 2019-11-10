import { Injectable } from "@angular/core";

import { Store } from '../../general/stores/store';
import { IScoutMission } from '../models/scoutmission.model';

@Injectable()
export class ScoutMissionStore extends Store<IScoutMission[]> {
    constructor() {
        super([] as IScoutMission[]);
    }
}