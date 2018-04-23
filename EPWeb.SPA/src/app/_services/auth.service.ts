import { AuthUser } from './../_models/user/AuthUser';
import { User } from './../_models/user/User';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { UserForRegistration } from '../_models/user/UserForRegistration';
import { ApiVersion } from '../_models/system/apiVersion';

@Injectable()
export class AuthService {

    private baseUrl = environment.apiUrl;
    private ngSystemVersion = environment.ngVersion;
    userRoles: string[];
    currentUser: User;
    userToken: any;
    decodedToken: any;

    constructor(private http: HttpClient, private jwtHelperService: JwtHelperService) { }

    login(model: any) {
        return this.http.post<AuthUser>(this.baseUrl + 'auth/login', model, {
            headers: new HttpHeaders()
                .set('Content-Type', 'application/json')
        })
            .map(user => {
                if (user) {
                    localStorage.setItem('token', user.tokenString);
                    localStorage.setItem('user', JSON.stringify(user.user));
                    localStorage.setItem('roles', JSON.stringify(user.roles));
                    this.decodedToken = this.jwtHelperService.decodeToken(user.tokenString);
                    this.currentUser = user.user;
                    this.userToken = user.tokenString;
                    this.userRoles = user.roles;
                }});
    }

    register(user: UserForRegistration) {
        return this.http.post(this.baseUrl + 'auth/register', user, { headers: new HttpHeaders()
                .set('Content-Type', 'application/json')});
    }

    getApiSystemVersion() {
        return this.http.get<ApiVersion>(this.baseUrl + 'admin/version');
    }

    getNgSystemVersion() {
        return this.ngSystemVersion;
    }

    loggedIn() {
        const token = this.jwtHelperService.tokenGetter();
        if (!token) {
            return false;
        }
        return !this.jwtHelperService.isTokenExpired(token);
    }

    isAdmin() {
        return (this.userRoles.indexOf('Admin user') > -1)
    }

    isSuperAdmin() {
        return (this.userRoles.indexOf('Super Admin user') > -1)
    }

}