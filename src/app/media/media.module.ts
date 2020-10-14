import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideoListComponent } from './components/video-list/video-list.component';
import { RouterModule, Routes } from '@angular/router';
import { MediaComponent } from './components/media/media.component';
import { GalleryComponent } from './components/gallery/gallery.component';


const mediasRoutes: Routes = [
  {
    path: '',
    component: MediaComponent,
    children: [
      { path: 'gallery', component: GalleryComponent },
      { path: 'videos', component: VideoListComponent },
      { path: '', component: MediaComponent }]
  }];


@NgModule({
  declarations: [
    GalleryComponent,
    VideoListComponent,
    MediaComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(mediasRoutes)
  ],
  exports: [RouterModule]
})
export class MediaModule { }
