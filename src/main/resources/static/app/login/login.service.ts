import { Injectable } from '@angular/core';
import { Http, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class LoginService {
    constructor(private http: Http) {}

    public login(email: string, password: string) {
        return this.makeRequest(`login/${email}`);
    }


    private makeRequest(path: string) {
        let params = new URLSearchParams();

        let url = `/${path}`;
        return this.http.get(url, {search: params})
            .map((res) => res.json());
    }
}
