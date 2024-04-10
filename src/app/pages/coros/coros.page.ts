import { Component, OnInit } from '@angular/core';
import { Howl} from 'howler';

export interface Track {
  name: string;
  path: string;
}

@Component({
  selector: 'app-coros',
  templateUrl: './coros.page.html',
  styleUrls: ['./coros.page.scss'],
})


export class CorosPage implements OnInit {

  playlist: Track[] = [
    {
      name: 'Cozzy Coffe Hose',
      path: '../assets/mp3/cozycoffeehouse.mp3'
    },
    {
      name: 'On Repeat',
      path: '../assets/mp3/onrepeat.mp3'
    },
    {
      name: 'Unbrekeable Resolve',
      path: '../assets/mp3/unbreakableresolve.mp3'
    }
  ];

  activeTrack: Track = null;
  player: Howl = null;
  isPlaying = false;

  constructor() { }

  start(track: Track){
    if(this.player){
      this.player.stop();
    }
    this.player = new Howl({
      src: [track.path],
      onplay: () => {
        console.log('onplay');
        this.isPlaying = true;
        this.activeTrack = track;
      },
      onend: () => {
        console.log('onend');
      }

    });
    this.player.play();
  }

  togglePlayer(pause){
    this.isPlaying = !pause;
    if(pause){
      this.player.pause();
    } else {
      this.player.play();
    }
  }

  next(){

  }

  prev(){

  }

  seek(){

  }

  updateProgess(){

  }



  ngOnInit() {
  }

}
