import { LocalStorageService } from 'ngx-webstorage';
import { Injectable } from "@angular/core";

import { LOCAL_STORAGE_KEY } from '../constants/storage.constants';

@Injectable()
export class PersistenceHelper<T> {
    constructor (private localStorageService: LocalStorageService) { }

    public retrieve(key: LOCAL_STORAGE_KEY): T[] {
        return this.localStorageService.retrieve(key);
    }

    public store(key: LOCAL_STORAGE_KEY, value: T[]) {
        this.localStorageService.store(key, value);
    }
}