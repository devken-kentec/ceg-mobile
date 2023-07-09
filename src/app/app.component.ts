import { Component, OnInit } from '@angular/core';
import { GlobalService } from './shared/global.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {

  menu = true;

  constructor(private globalService: GlobalService) {}

  ngOnInit(): void {
        this.globalService.setId(2);
  }
}
