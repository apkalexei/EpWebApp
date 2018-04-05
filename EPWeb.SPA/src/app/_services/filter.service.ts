import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { ResourceForFilter } from './../_models/resource/resourceForFilter';
import { ProductionGroupForFilter } from './../_models/productionGroup/productionGroupForFilter';
import { DatePipe } from '@angular/common';
import { Headers, RequestOptions, Response } from "@angular/http";
import { HttpClient } from '@angular/common/http';

@Injectable()
export class FilterService {

    baseUrl = environment.apiUrl;

    constructor(private datePipe: DatePipe, private authHttp: HttpClient) { }

    getProductionGroupsForFilter() {
        return this.authHttp
            .get<ProductionGroupForFilter>(this.baseUrl + "resourcegroup");
    }

    getResourcesForFilter(productionGroupId: number) {
        return this.authHttp
            .get<ResourceForFilter>(this.baseUrl + "resource/byProductionGroup/" + productionGroupId);
    }

    getFormatDate(value: Date) {
        return this.datePipe.transform(value, 'MM/dd/yyyy');
    }

}