import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { RegistrationComponent } from "./registration/registration.component";
import { ButtonComponent } from "./button/button.component";
import { ReactiveComponent } from "./reactive/reactive.component";
import { ReactivedataComponent } from './reactivedata/reactivedata.component';

const routes: Routes = [
  { path: "", component: ButtonComponent },
  { path: "button", component: ButtonComponent },
  { path: "home", component: HomeComponent },
  { path: "registration", component: RegistrationComponent },
  { path: "reactive", component: ReactiveComponent },
  { path: "reactivedata", component: ReactivedataComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
