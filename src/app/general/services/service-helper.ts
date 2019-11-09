import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { SHERLOCK_API_PATH, AUTH_TOKEN, API_ENDPOINTS } from '../constants/api-paths';

@Injectable()
export abstract class ServiceHelper<T>{
    constructor(private httpClient: HttpClient) { }

    public getAll(endpoint: API_ENDPOINTS): Promise<T[]> {
        return new Promise<T[]>(
            (resolve, reject) => {
                const url: string = `${SHERLOCK_API_PATH}${endpoint}`;
                const httpHeaders = new HttpHeaders({Authorization: AUTH_TOKEN});

                this.httpClient
                    .get(url, { headers: httpHeaders })
                    .toPromise()
                    .then((response: T[]) => {
                        resolve(response);
                    })
                    .catch((error: any) => {
                        reject(error);
                    });
            }
        );
    }
}