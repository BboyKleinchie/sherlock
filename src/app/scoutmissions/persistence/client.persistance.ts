import { Injectable } from "@angular/core";

import { PersistenceHelper } from '../../general/persistence/persistence-helper';
import { IClient } from '../models/client.model';
import { LOCAL_STORAGE_KEY } from '../../general/constants/storage.constants';

/*
    Used to persist the data to Local Storage
*/
@Injectable()
export abstract class ClientPersistence {
    constructor (private persistenceHelper: PersistenceHelper<IClient>) { }

    public retrieve(): IClient[] {
        return this.persistenceHelper.retrieve(LOCAL_STORAGE_KEY.CLIENT);
    }

    public store(clients: IClient[]): void {
        this.persistenceHelper.store(LOCAL_STORAGE_KEY.CLIENT, clients);
    }
}