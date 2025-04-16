import { Component, Input } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import * as dataRow from '../../../data/tracks.json'

@Component({
  selector: 'app-play-lists-body',
  standalone: false,
  templateUrl: './play-lists-body.component.html',
  styleUrl: './play-lists-body.component.scss'
})
export class PlayListsBodyComponent {
  @Input() mockTracksList: TrackModel[] = []
  optionSort: { property: string | null, order: string } = { property: null, order: 'asc' }
  constructor() { }

  ngOnInit(): void {
    const { data }: any = (dataRow as any).default;
    this.mockTracksList = data;
  }
  changeSort(property: string): void {
    const { order } = this.optionSort
    this.optionSort = {
      property,
      order: order === 'asc' ? 'desc' : 'asc'
    }
    console.log(this.optionSort);

  }
}
