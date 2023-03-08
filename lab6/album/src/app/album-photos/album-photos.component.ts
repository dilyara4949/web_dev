import { Component, OnInit } from '@angular/core';
import { AlbumsService } from '../albums.service';
import {ActivatedRoute} from "@angular/router";
import { AlbumPhotos } from '../models';

@Component({
  selector: 'app-album-photos',
  templateUrl: './album-photos.component.html',
  styleUrls: ['./album-photos.component.css']
})
export class AlbumPhotosComponent implements OnInit{

  albumPhotos: AlbumPhotos[] = [];
  id : number = 0;

  constructor(private route: ActivatedRoute,
              private albumsService: AlbumsService) {
  }

  ngOnInit(): void {

    this.route.paramMap.subscribe((params) =>{
      this.id = Number(params.get("id"));
      this.getAlbumPhotos(this.id);
    })
    
  }

  getAlbumPhotos(id: number) {
    this.albumsService.getAlbumPhotos(id).subscribe((photos) =>{
      this.albumPhotos = photos;
    })
  }
}



// getAlbumPhotos(id: number): Observable<string[]> {
//   return this.client.get<string[]>(`${this.BASE_URL}/albums/${id}/photos`)
// }