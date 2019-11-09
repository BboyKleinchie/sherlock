import { Injectable } from '@angular/core';

import { ServiceHelper } from '../../general/services/service-helper';
import { IServiceGET } from '../../general/services/service.interface';
import { API_ENDPOINTS } from '../../general/constants/api-paths';
import { IClient } from '../models/client.model';
import { ClientPersistence } from '../persistence/client.persistance';

@Injectable()
export class ClientService implements IServiceGET<IClient> {
    constructor (
        private serviceHelper: ServiceHelper<IClient>,
        private clientPersistence: ClientPersistence,
    ) { }

    public getAll(): Promise<IClient[]> {
        const clientCache: IClient[] = this.clientPersistence.retrieve();
        if (clientCache) { return Promise.resolve(clientCache); }

        return this.serviceHelper.getAll(API_ENDPOINTS.CLIENT);
    }
}