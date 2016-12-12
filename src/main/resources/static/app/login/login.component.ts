import {Component, OnInit} from "@angular/core";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {LoginService} from "./login.service";

@Component({
    selector: 'sc-login',
    templateUrl: './login.component.html',
})
export class LoginComponent  implements OnInit {

    loginForm: FormGroup;
    email: string;
    password: string;
    constructor(public loginService: LoginService, private formBuilder: FormBuilder) {
    }

    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            email: ['', [Validators.required]],
            password: ['', [Validators.required]]
        });
    }

    onLogin() {
        this.loginService.login(this.email, this.password);
    }

    submitForm(): void {
        console.log(this.loginForm);
    }
}
