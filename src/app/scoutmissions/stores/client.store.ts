import { Injectable } from "@angular/core";

import { Store } from '../../general/stores/store';
import { IClient } from '../models/client.model';

@Injectable()
export class ClientStore extends Store<IClient> {
    constructor() {
        super(null);
    }
}