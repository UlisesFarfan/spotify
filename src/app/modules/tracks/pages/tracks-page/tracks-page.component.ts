import { Component } from '@angular/core';
import * as dataRow from '../../../../data/tracks.json'
import { TrackModel } from '@core/models/tracks.model';

@Component({
  selector: 'app-tracks-page',
  templateUrl: './tracks-page.component.html',
  styleUrl: './tracks-page.component.scss',
  standalone: false,
})
export class TracksPageComponent {
  mockTracksList: Array<TrackModel> = [

  ];

  constructor() { }
  ngOnInit(): void {
    const { data }: any = (dataRow as any).default;
    this.mockTracksList = data;
  }
}
