import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CatInfosService {
  private _API_PATH = 'https://meowfacts.herokuapp.com/'
  private _http = inject(HttpClient);

  public loadInfo(): Observable<string> {
    return this._http.get<{ data: string }>(`${this._API_PATH}`).pipe(map(res => res.data[0]));
  }
}
