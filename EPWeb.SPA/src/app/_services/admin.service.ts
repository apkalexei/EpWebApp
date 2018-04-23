import { UserToList } from './../_models/user/UserToList';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable()
export class AdminService {

    /* All API calls in this service requires 'Admin user' or 'Super Admin user' role encoded in JWT token, otherwise API will reject request with 403 forbidden status */

    baseUrl = environment.apiUrl;

    constructor(private authHttp: HttpClient) { }

    /* Gets only users who are waiting to be allowed */
    getNotAllowedUsers() {
        return this.authHttp.get<UserToList[]>(this.baseUrl + 'admin/usersToAllow');
    }

    /* Gets all users, including users who are waiting to be allowed */
    getAllUsers() {
        return this.authHttp.get<UserToList[]>(this.baseUrl + 'admin/allUsers');
    }

    /* Delete specific user */
    deleteUser(id: number) {
        return this.authHttp.delete(this.baseUrl + 'admin/users/delete/' + id, {
            headers: new HttpHeaders()
                .set('Content-Type', 'application/json')
        });
    }

    /* Allows specific user, user is not allowed to sign-in until his account is allowed */
    allowUser(id: number) {
        return this.authHttp.put(this.baseUrl + 'admin/users/allow/' + id, {
            headers: new HttpHeaders()
                .set('Content-Type', 'application/json')
        });
    }

}
