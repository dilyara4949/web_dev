import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import { Album } from './models';
import { Title } from '@angular/platform-browser';


@Injectable({
  providedIn: 'root'
})
export class AlbumsService {
  BASE_URL: string = 'https://jsonplaceholder.typicode.com'

  constructor(private client: HttpClient) {
  }

  getAlbums(): Observable<Album[]> {
    return this.client.get<Album[]>(`${this.BASE_URL}/albums`)
  }

  getAlbum(id: number) {
    return this.client.get<Album>(`${this.BASE_URL}/albums/${id}`)
  }
  
  updateAlbum(album: Album): Observable<Album> {
    return this.client.post<Album>(`${this.BASE_URL}/albums`, album);
  }

}
