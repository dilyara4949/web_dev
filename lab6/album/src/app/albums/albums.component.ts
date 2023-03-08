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
  create_album: boolean = false;
  newAlbum: Album = {} as Album;

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
  deleteAlbum(id: number) {
    this.albumsService.deleteAlbum(id).subscribe(() => {
      this.albums = this.albums.filter(album => album.id !== id);
    });
  }

  to_create() {
    this.create_album = !this.create_album;
  }

  addAlbum() {
    this.albumsService.addAlbum(this.newAlbum).subscribe((album) => {
      this.albums.push(album);
      this.loaded = true;
      this.newAlbum = {} as Album;
    });
  }
  
}
