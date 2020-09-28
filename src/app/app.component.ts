import { Component, OnInit } from '@angular/core';
import { DataService } from './DataService/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  activeUsers: string[] = [];
  inactiveUsers: string[] = [];

  constructor(private dataService: DataService){}

  ngOnInit(): void {
    this.activeUsers = this.dataService.activeUsers;
    this.inactiveUsers = this.dataService.inactiveUsers;
  }
}
