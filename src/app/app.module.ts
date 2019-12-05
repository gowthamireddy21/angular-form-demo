import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { AppPasswordDirective } from "./app-password.directive";
import { RegistrationComponent } from "./registration/registration.component";
import { ButtonComponent } from "./button/button.component";
import { ReactiveComponent } from "./reactive/reactive.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material";
import { MatButtonModule, MatRippleModule } from "@angular/material";
import { MatSelectModule } from "@angular/material/select";
import { MatRadioModule } from "@angular/material/radio";
import { MatCardModule } from "@angular/material/card";
import { LayoutModule } from "@angular/cdk/layout";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatIconModule } from "@angular/material/icon";
import { MatListModule } from "@angular/material/list";
import { ReactivedataComponent } from './reactivedata/reactivedata.component';
// import { HeroDirective } from "./hero.directive";
// import { ValidatorDirectiveDirective } from "./directives/validator-directive.directive";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AppPasswordDirective,
    RegistrationComponent,
    ButtonComponent,
    ReactiveComponent,
    ReactivedataComponent
    // ValidatorDirectiveDirective
    // HeroDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatRippleModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
