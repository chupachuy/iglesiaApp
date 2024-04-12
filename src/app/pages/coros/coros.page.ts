import { Component, OnInit, ViewChild } from '@angular/core';
import { IonRange } from '@ionic/angular';
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
    },
    {
      name: 'November Rain',
      path: '../assets/mp3/Guns_N_Roses_-_November_Rain.mp3'
    },
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
    },
    {
      name: 'November Rain',
      path: '../assets/mp3/Guns_N_Roses_-_November_Rain.mp3'
    },
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
    },
    {
      name: 'November Rain',
      path: '../assets/mp3/Guns_N_Roses_-_November_Rain.mp3'
    },
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
    },
    {
      name: 'November Rain ultima',
      path: 'https://iglesiaeliasista.org.mx/wp-content/uploads/2019/05/SantoSantoSanto.mp3'
    }
  ];

  activeTrack: Track = null;
  player: Howl = null;
  isPlaying = false;
  progress = 0;
  @ViewChild('range', {static: false}) range: IonRange;

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
        this.updateProgess();
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
    let index = this.playlist.indexOf(this.activeTrack);
    if( index != this.playlist.length - 1){
      this.start(this.playlist[index + 1]);
    } else {
      this.start(this.playlist[0]);
    }
  }

  prev(){
    let index = this.playlist.indexOf(this.activeTrack);
    if( index > 0){
      this.start(this.playlist[index - 1])
    } else {
      this.start(this.playlist[this.playlist.length - 1])
    }
  }

  seek(){
    let newValue = +this.range.value;
    let duration = this.player.duration();
    this.player.seek(duration * (newValue / 100));
  }
  updateProgess(){
    let seek = this.player.seek();
    this.progress = (seek / this.player.duration()) * 100 || 0;
    setTimeout(() => {
      this.updateProgess();
    }, 1000);
  }

  ngOnInit() {
  }

}
