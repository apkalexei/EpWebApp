import { UserToAllow } from './../_models/user/UserToAllow';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable()
export class AdminService {

    baseUrl = environment.apiUrl;

    constructor(private authHttp: HttpClient) { }

    getNotAllowedUsers() {
        return this.authHttp.get<UserToAllow[]>(this.baseUrl + 'admin/users');
    }

    allowUser(id: number) {
        return this.authHttp.post(this.baseUrl + 'admin/users/allow/' + id, {
            headers: new HttpHeaders()
                .set('Content-Type', 'application/json')
        });
    }

}
