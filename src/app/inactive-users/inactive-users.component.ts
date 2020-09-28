import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DataService } from '../DataService/data.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent {
  @Input() users: string[];

  constructor(private dataService: DataService){}

  onSetToActive(id: number) {
    this.dataService.setToActive(id);
  }
}
