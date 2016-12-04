import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {LoginComponent} from "./login/login.component";
import {AppComponent} from "./app.component";
import {LoginService} from "./login/login.service";
import {HttpModule} from "@angular/http";

@NgModule({

    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        HttpModule],

    declarations: [
        AppComponent,
        LoginComponent],

    providers: [
        LoginService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
