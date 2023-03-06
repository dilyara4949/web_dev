import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Album } from '../models';
import { AlbumsService } from '../albums.service'; 

@Component({
  selector: 'app-album-detail',
  templateUrl: './album-detail.component.html',
  styleUrls: ['./album-detail.component.css']
})
export class AlbumDetailComponent implements OnInit{
  album: Album;

  constructor (private route: ActivatedRoute,
              private albumsService: AlbumsService) {
                this.album = {} as Album;
              }

  ngOnInit(): void {
      this.route.paramMap.subscribe((params) => {
        const id = Number(params.get('id'));
        this.albumsService.getAlbum(id).subscribe((album) => {
          this.album = album;
        });
      })
  }
}
