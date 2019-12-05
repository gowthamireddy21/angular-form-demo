import { Component, OnInit } from "@angular/core";
import {
  FormControl,
  Validators,
  FormGroup,
  FormGroupName,
  NgForm
} from "@angular/forms";
import { ValidatorDirectiveDirective } from "../validator-directive.directive";
import { Router } from '@angular/router';
// import { DataserviceService } from '../dataservice.service';
import { DataserviceService } from '../../dataservice.service';


// import { HeroDirective } from '../directives/hero.directive';

@Component({
  selector: "app-reactive",
  templateUrl: "./reactive.component.html",
  styleUrls: ["./reactive.component.css"]
})
export class ReactiveComponent implements OnInit {

  hide = true;
  heroForm: FormGroup;
  hero = {
    fname: "",
    mobile: "",
    email: "",
    address: "",
    username: "",
    password: "",
    cpassword: "",
    gender: "",
    country: "",
    state: "",
    city: ""

  };
  constructor(private router: Router, private react: DataserviceService) { }

  ngOnInit() {
    this.heroForm = new FormGroup({
      fname: new FormControl(this.hero.fname, [
        Validators.required,
        Validators.minLength(3)

      ]),
      mobile: new FormControl(this.hero.mobile, [
        Validators.required,
        Validators.minLength(4)
      ]),
      email: new FormControl(this.hero.email, [
        Validators.required,
        Validators.minLength(4),

      ]),

      address: new FormControl(this.hero.address, [
        Validators.required,
        Validators.minLength(4)
      ]),
      username: new FormControl(this.hero.username, [
        Validators.required,
        Validators.minLength(4)
      ]),
      gender: new FormControl(this.hero.gender, [
        Validators.required,

      ]),
      password: new FormControl(this.hero.password, [
        Validators.required,
        Validators.minLength(4),

      ]),
      cpassword: new FormControl(this.hero.cpassword, [
        Validators.required,
      ]),
      country: new FormControl(this.hero.country, [
        Validators.required,
      ]),
      state: new FormControl(this.hero.state, [
        Validators.required,
      ]),
      city: new FormControl(this.hero.city, [
        Validators.required,
      ])
    });
  }
  get fname() {
    return this.heroForm.get("fname");
  }
  get mobile() {
    return this.heroForm.get("mobile");

  }

  get email() {
    return this.heroForm.get("email");

  }
  get address() {
    return this.heroForm.get("address");
  }
  get username() {
    return this.heroForm.get("username");
  }
  get password() {
    return this.heroForm.get("password");
  }
  get cpassword() {
    return this.heroForm.get("cpassword");
  }
  get gender() {
    return this.heroForm.get("gender");
  }
  get country() {
    return this.heroForm.get("country");
  }
  get state() {
    return this.heroForm.get("state");
  }
  get city() {

    return this.heroForm.get("city");
  }
  submitform(heroForm: NgForm) {
    console.log(heroForm);
    if (heroForm.valid) {
      this.router.navigate(["reactivedata"]);
      // this.service.store = this.angular;
      this.react.data = this.heroForm;
    }
  }
}
