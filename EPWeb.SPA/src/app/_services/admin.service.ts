import { UserToList } from './../_models/user/UserToList';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable()
export class AdminService {

    baseUrl = environment.apiUrl;

    constructor(private authHttp: HttpClient) { }

    getNotAllowedUsers() {
        return this.authHttp.get<UserToList[]>(this.baseUrl + 'admin/usersToAllow');
    }

    getAllUsers() {
        return this.authHttp.get<UserToList[]>(this.baseUrl + 'admin/allUsers');
    }

    deleteUser(id: number) {
        return this.authHttp.delete(this.baseUrl + 'admin/users/delete/' + id, {
            headers: new HttpHeaders()
                .set('Content-Type', 'application/json')
        });
    }

    allowUser(id: number) {
        return this.authHttp.put(this.baseUrl + 'admin/users/allow/' + id, {
            headers: new HttpHeaders()
                .set('Content-Type', 'application/json')
        });
    }

}
