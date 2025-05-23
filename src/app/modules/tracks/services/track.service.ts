import { TrackModel } from '@core/models/tracks.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map, mergeMap, tap, catchError } from 'rxjs/operators';
import { environment } from '../../../../enviroments/environment';
@Injectable({
  providedIn: 'root'
})
export class TrackService {
  private readonly URL = environment.api

  constructor(private http: HttpClient) {

  }

  private skipById(listTracks: TrackModel[], id: number): Promise<TrackModel[]> {
    return new Promise((resolve, reject) => {
      const listTmp = listTracks.filter(a => a._id !== id)
      resolve(listTmp)
    })
  }

  getAllTracks$(): Observable<any> {
    return this.http.get(`${this.URL}/tracks`,{
      headers: new HttpHeaders({
        authorization: "Bearer token"
      })
    })
      .pipe(
        map(({ data }: any) => {
          return data
        })
      )
  }

  getAllRandom$(): Observable<any> {
    return this.http.get(`${this.URL}/tracks`)
      .pipe(
        mergeMap(({ data }: any) => this.skipById(data, 2)),
        // map((dataRevertida) => { //TODO aplicar un filter comun de array
        //   return dataRevertida.filter((track: TrackModel) => track._id !== 1)
        // })
        catchError((err) => {
          const { status, statusText } = err;
          return of([])
        })
      )
  }
}