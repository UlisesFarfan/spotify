import { Component, Input } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';

@Component({
  selector: 'app-section-generic',
  standalone: false,
  templateUrl: './section-generic.component.html',
  styleUrl: './section-generic.component.scss'
})
export class SectionGenericComponent {
  @Input() title: string = "";
  @Input() mode: "small" | "big" = "big";
  @Input() dataTracks: Array<TrackModel> = []
}
