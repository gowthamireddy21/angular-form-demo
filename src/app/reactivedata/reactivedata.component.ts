import { Component, OnInit } from '@angular/core';
import { DataserviceService } from '../../dataservice.service';

@Component({
  selector: 'app-reactivedata',
  templateUrl: './reactivedata.component.html',
  styleUrls: ['./reactivedata.component.css']
})
export class ReactivedataComponent implements OnInit {
  react: any = {};
  constructor(private datareact: DataserviceService) { }

  ngOnInit() {
    this.react = this.datareact.data
  }

}
