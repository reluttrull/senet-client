import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { UserInfo } from '../model/user-info';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  protected readonly serverUrl = 'https://localhost:7019';
  http = inject(HttpClient);
  
  apiRequestJoinGame() {
    return this.http.get<UserInfo>(`${this.serverUrl}/game/games`, {
      withCredentials: true
    })
  }

  apiRollSticks(userid:string) {
    return this.http.put(`${this.serverUrl}/game/sticks/${userid}`, {
      withCredentials: true
    })
  }

  apiChangeTurn(userid:string, nextIsWhiteTurn:boolean) {
    return this.http.put(`${this.serverUrl}/game/turns/${userid}/${nextIsWhiteTurn}`, {
      withCredentials: true
    })
  }

  apiMovePawn(userid:string, startPosition: number) {
    let params = new HttpParams();
    params = params.set('startPosition', startPosition);
    return this.http.put(`${this.serverUrl}/game/pawns/${userid}/${startPosition}`, {
      params: params,
      withCredentials: true
    })
  }
}
