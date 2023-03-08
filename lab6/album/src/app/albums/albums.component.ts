import { Component, OnInit } from '@angular/core';
import { Album } from '../models';
import { AlbumsService } from '../albums.service';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit{
  albums: Album[];
  loaded: boolean;

  constructor (private albumsService: AlbumsService) {
    this.albums = []
    this.loaded = false;
  }

  ngOnInit(): void{
    this.getAlbums();
  }

  getAlbums() {
    this.albumsService.getAlbums().subscribe((albums) =>{
      this.albums = albums;
      this.loaded = true;
    })
  }
  removeAlbum(idx: number) {
    this.albums = this.albums.filter((x) => x.id !== idx);
  }
}