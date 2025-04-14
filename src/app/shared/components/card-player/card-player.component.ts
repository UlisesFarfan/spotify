import { Component, Input } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';

@Component({
  selector: 'app-card-player',
  standalone: false,
  templateUrl: './card-player.component.html',
  styleUrl: './card-player.component.scss'
})
export class CardPlayerComponent {
  @Input() track: TrackModel = {
    name: '',
    album: '',
    cover: '',
    url: '',
    _id: ''
  };
  @Input() mode: "small" | "big" = "big"
  
}
