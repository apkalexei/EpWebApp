import { ResourceForScheduler } from './../_models/resource/resourceForScheduler';
import { ResourceAllocations } from './../_models/resource/resourceAllocations';
import { Injectable } from '@angular/core';
import { ProductionGroupForFilter } from '../_models/productionGroup/productionGroupForFilter';
import { Http } from '@angular/http';
import { environment } from '../../environments/environment';

/* Service which is responsible for providing information to the scheduler based on information from search params sent via search form */
@Injectable()
export class ResourceService {

    baseUrl = environment.apiUrl;

    constructor(private http: Http) {}

    getResAllocsForGivenResource(resourceId: number) {
        return this.http
            .get(this.baseUrl + "/resalloc/" + resourceId)
            .map(res => <any[]>res.json());
    }

    getResourceDetailById(resourceId: number) {
        return this.http
            .get(this.baseUrl + "/resource/" + resourceId)
            .map(res => res.json());
    }

    getProductionGroup(prodGroupId: number) {
        return this.http
            .get(this.baseUrl + "/resgroup/" + prodGroupId)
            .map(res => res.json());
    }

}