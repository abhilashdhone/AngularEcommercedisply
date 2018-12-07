import { Component, OnChanges, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-starcomp',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})

export class StarComponent implements OnChanges {

  @Input() starrating: number;
  stardisplaywidth: number;
  @Output() messageThrower: EventEmitter<any> = new EventEmitter<any>();
  message: any = 'message is sent and ';

  ngOnChanges(): void {
    this.stardisplaywidth = this.starrating * 86 / 5;
    // this.messageThrower.emit(this.starrating);
  }

  messageSender(): void {
    this.messageThrower.emit(this.message + `rating is ${this.starrating}`);
  }
}
