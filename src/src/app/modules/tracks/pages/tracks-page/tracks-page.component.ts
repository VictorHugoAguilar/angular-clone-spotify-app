import { Component, OnInit } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { Subscription } from 'rxjs';

import * as dataRaw from '../../../../data/track.json';

@Component({
  selector: 'app-tracks-page',
  templateUrl: './tracks-page.component.html',
  styleUrls: ['./tracks-page.component.css']
})
export class TracksPageComponent implements OnInit {

  tracksTrending: Array<TrackModel> = []
  tracksRandom: Array<TrackModel> = []
  listObservers$: Array<Subscription> = []

  ngOnInit(): void {
    console.log('trackPageComponents')
    const { data } : any = (dataRaw as any).default
    this.tracksTrending = data
    this.tracksRandom = data
  } 

}
