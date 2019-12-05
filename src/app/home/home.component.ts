import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import { StorageService } from "../registration/storage.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  angular: any = {};
  passwordVisible: Boolean = true;

  constructor(private router: Router, private service: StorageService) {}

  ngOnInit() {}

  submitform(angular: NgForm) {
    console.log(angular);
    if (angular.valid) {
      this.router.navigate(["registration"]);
      this.service.store = this.angular;
    }
  }
  showpassword() {
    this.passwordVisible = !this.passwordVisible;
  }
}
