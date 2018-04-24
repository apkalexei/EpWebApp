import { UserToList } from './../_models/user/UserToList';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { PaginatedResult } from '../_models/system/pagination';

@Injectable()
export class AdminService {

    /* All API calls in this service requires 'Admin user' or 'Super Admin user' role encoded in JWT token, otherwise API will reject request with 403 forbidden status */

    baseUrl = environment.apiUrl;

    constructor(private authHttp: HttpClient) { }

    /* Gets all users */
    getAllUsers(page?, itemsPerPage?, onlyNotAllowed?: any) {

        const paginatedResult: PaginatedResult<UserToList[]> = new PaginatedResult<UserToList[]>();
        let params = new HttpParams();

        if (page != null && itemsPerPage != null) {
            params = params.append('pageNumber', page);
            params = params.append('pageSize', itemsPerPage);
        }

        /* if true, then only not allowed users are returned from API */
        if (onlyNotAllowed == true) {
            params = params.append('onlyNotAllowed', onlyNotAllowed);
        }

        return this.authHttp
            .get<UserToList[]>(this.baseUrl + 'admin/allUsers', { observe: 'response', params })
            .map(response => {
                paginatedResult.result = response.body;
                if (response.headers.get('Pagination') != null) {
                    paginatedResult.pagination = JSON.parse(response.headers.get('Pagination'));
                }
                return paginatedResult;
            })
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
