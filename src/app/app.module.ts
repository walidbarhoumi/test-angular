import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AddAlbumComponent } from './add-album/add-album.component';
import { ListAlbumsComponent } from './list-albums/list-albums.component';
import { ListPhotosComponent } from './list-photos/list-photos.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  { path: '', redirectTo: '/albums', pathMatch: 'full' },
  { path: 'albums', component: ListAlbumsComponent },
  { path: 'add-album', component: AddAlbumComponent },
  { path: 'album/:id', component: ListPhotosComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    AddAlbumComponent,
    ListAlbumsComponent,
    ListPhotosComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
