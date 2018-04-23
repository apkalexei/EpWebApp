import { ResourceAllocationDetail } from './../_models/resource/resourceAllocationDetail';
import { ProductionGroupForFilter } from './../_models/productionGroup/productionGroupForFilter';
import { ResourceForScheduler } from './../_models/resource/resourceForScheduler';
import { ResourceAllocations } from './../_models/resource/resourceAllocations';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';

/* Service which is responsible for providing information to the scheduler based on information from search params sent via search form */

@Injectable()
export class ResourceService {

    baseUrl = environment.apiUrl;

    constructor(private authHttp: HttpClient) {}

    /* Gets all available resource allocations for specific resource */
    getResAllocsForGivenResource(resourceId: number) {
        return this.authHttp.get<ResourceAllocations[]>(this.baseUrl + "resourceAllocation/" + resourceId);
    }

    /* Gets detail information of specific resource */
    getResourceDetailById(resourceId: number) {
        return this.authHttp.get<ResourceForScheduler>(this.baseUrl + "resource/" + resourceId);
    }

    /* Gets specific resourceGroup information */
    getProductionGroup(resourceGroupId: number) {
        return this.authHttp.get<ProductionGroupForFilter>(this.baseUrl + "resourceGroup/" + resourceGroupId);
    }

    /* Gets detail information of specific resource allocation */
    getResAllocDetail(resAllocId: number) {
        return this.authHttp.get<ResourceAllocationDetail>(this.baseUrl + "resourceAllocation/detail/" + resAllocId);
    }
}