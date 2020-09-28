import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DataService } from '../DataService/data.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent {
  @Input() users: string[];

  constructor(private dataService: DataService){}

  onSetToInactive(id: number) {
    this.dataService.setToInActive(id);
  }
}
