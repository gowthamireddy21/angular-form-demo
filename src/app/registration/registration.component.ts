import { Component, OnInit } from "@angular/core";
import { StorageService } from "./storage.service";
// import { HeroService } from "../hero.service";

@Component({
  selector: "app-registration",
  templateUrl: "./registration.component.html",
  styleUrls: ["./registration.component.css"]
})
export class RegistrationComponent implements OnInit {
  service: any = {};
  constructor(private form: StorageService) {}

  ngOnInit() {
    this.service = this.form.store;
  }
}
