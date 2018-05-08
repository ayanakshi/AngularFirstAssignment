import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

/**
 * This service is used to handle login related stuffs
 */
@Injectable()
export class LoginService {

    /**
     * Constructor:
     * @param http
     */
    constructor(private http: HttpClient) { };

    public validUserName = "TestUser";
    public validPassword = "TestUser";

    /**
     * This method is used to return the success or failure response
     */
    public loginUser(userName: String, password: String): Observable<any> {
        if (userName === this.validUserName && password === this.validPassword) {
            return this.http.get('~/../assets/mockJsonResponse/loginSuccessResponse.json');
        } else {
            return this.http.get('~/../assets/mockJsonResponse/loginFailureResponse.json');
        }
    }
};
