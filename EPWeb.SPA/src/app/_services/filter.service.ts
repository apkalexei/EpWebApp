import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { ResourceForFilter } from './../_models/resource/resourceForFilter';
import { ProductionGroupForFilter } from './../_models/productionGroup/productionGroupForFilter';
import { DatePipe } from '@angular/common';
import { Http, Headers, RequestOptions, Response } from "@angular/http";

@Injectable()
export class FilterService {

    baseUrl = environment.apiUrl;

    constructor(private datePipe: DatePipe, private http: Http) { }

    getProductionGroupsForFilter() {
        return this.http
            .get(this.baseUrl + "/resgroup")
            .map(res => <any[]>res.json());
    }

    getResourcesForFilter(productionGroupId: number) {
        return this.http
            .get(this.baseUrl + "/resource/byProductionGroup/" + productionGroupId)
            .map(res => <any[]>res.json());
    }

    getFormatDate(value: Date) {
        return this.datePipe.transform(value, 'MM/dd/yyyy');
    }

}