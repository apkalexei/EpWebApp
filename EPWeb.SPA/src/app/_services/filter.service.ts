import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { ResourceForFilter } from './../_models/resource/resourceForFilter';
import { ProductionGroupForFilter } from './../_models/productionGroup/productionGroupForFilter';
import { DatePipe } from '@angular/common';
import { Headers, RequestOptions, Response } from "@angular/http";
import { HttpClient } from '@angular/common/http';

@Injectable()
export class FilterService {

    /* Service responsible for providing data to dropdowns in search.component.ts  */

    baseUrl = environment.apiUrl;

    constructor(private datePipe: DatePipe, private authHttp: HttpClient) { }

    /* Return all available production groups */
    getProductionGroupsForFilter() {
        return this.authHttp
            .get<ProductionGroupForFilter>(this.baseUrl + "resourcegroup");
    }

    /* Return all available resources for specific production group */
    getResourcesForFilter(resourceGroupId: number) {
        return this.authHttp
            .get<ResourceForFilter>(this.baseUrl + "resource/byResourceGroup/" + resourceGroupId);
    }

    /* Formats data inputs which are being sent via URL params */
    getFormatDate(value: Date) {
        return this.datePipe.transform(value, 'MM/dd/yyyy');
    }

}