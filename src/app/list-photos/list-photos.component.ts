import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlbumService } from '../../services/album.service';
import { Photo } from '../../models/photo.model';

@Component({
  selector: 'app-list-photos',
  templateUrl: './list-photos.component.html',
  styleUrls: ['./list-photos.component.css'] 
})
export class ListPhotosComponent implements OnInit {
  photos: Photo[] = [];

  constructor(
    private albumService: AlbumService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const albumId = +this.route.snapshot.paramMap.get('id')!;
    this.albumService.getPhotosByAlbum(albumId).subscribe((photos) => {
      this.photos = photos;
    });
  }
}
