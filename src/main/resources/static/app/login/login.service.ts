import { Injectable } from '@angular/core';
import { Http, URLSearchParams, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class LoginService {
    constructor(private http: Http) {}

    public login(email: string, password: string) {
        return this.makeRequest(`accounts/login`, email, password);
    }


    private makeRequest(path: string, email: string, password: string) {
        let params = new URLSearchParams();

        let url = `/${path}`;
        return this.post(url, email, password).subscribe(result => {
             console.log( result );
        });
    }

    createAuthorizationHeader(headers: Headers, email: string, password: string) {
        headers.append('Authorization', 'Basic ' +
            btoa(''+email+':'+password+''));
    }

    post(url, email, password) {
        let headers = new Headers();
        this.createAuthorizationHeader(headers, email, password);
        return this.http.post(url, "loginMe", {
            headers: headers
        });
    }
}
