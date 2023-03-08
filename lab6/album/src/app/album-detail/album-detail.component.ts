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
  is_edit: boolean = false;
  newTitle: string = "";

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

  edit() {
    this.is_edit = !this.is_edit;
  }
  // save() {
  //   if (this.newTitle === "") {
  //     alert("Title cannot be empty!")
  //   } else {
  //     this.album.title = this.newTitle;
  //     this.is_edit = false;
  //     alert("Title updated");
  //   }
  // }


  updateAlbum(){

    if (this.newTitle === "") {
      alert("Title cannot be empty!")
    } else {
      this.albumsService.updateAlbum(this.album).subscribe(() => {
        this.album.title = this.newTitle;
        alert("Title updated");
        this.newTitle = "";
        this.is_edit = false;
      });
    }
  }

  // addPost(post: Post): Observable<Post> {
  //   return this.client.post<Post>(`${this.BASE_URL}/posts`, post);
  // }
}
