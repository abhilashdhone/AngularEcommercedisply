import { Component, OnInit } from '@angular/core';
import { MyMusicService } from './myMusic.service';


@Component({
  selector: 'app-mymusic',
  templateUrl: './mymusic.component.html',
})

export class MymusicComponent implements OnInit {
  element: any[] ;
  musicData: any[] ;
  errorMessage: string;

  constructor (private _mymusicservice: MyMusicService) {}

  ngOnInit() {
    this._mymusicservice.getMusic()
    .subscribe((data) => this.musicData = data, (err) => this.errorMessage = err);
  }

  checkConsole() {
    // console.log(this.musicData);

    for (let i = 0; i < this.musicData.length; i++) {
      for (let j = 0; j < this.musicData[i].artists.length; j++) {
         this.element = this.musicData[i].artists[j].name ;
      console.log(this.element);
      }
    }
  }
}
