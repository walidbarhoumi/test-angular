import { Component, Input } from '@angular/core';
import { Photo } from '../../models/photo.model';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.css'] 
})
export class PhotoComponent {
  @Input() photo: Photo | undefined;
}
