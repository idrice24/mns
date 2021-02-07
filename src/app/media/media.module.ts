import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideoListComponent } from './components/video-list/video-list.component';
import { RouterModule, Routes } from '@angular/router';
import { MediaComponent } from './components/media/media.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { MediaDashboardComponent } from './components/media-dashboard/media-dashboard.component';
import { SharedModule } from '../shared/shared.module';

import { FormsModule } from '@angular/forms';

const mediasRoutes: Routes = [
  { path: 'gallery', component: GalleryComponent },
  { path: 'videos', component: VideoListComponent },
  { path: '', component: MediaDashboardComponent }];


@NgModule({
  declarations: [
    GalleryComponent,
    VideoListComponent,
    MediaComponent,
    MediaDashboardComponent],
  imports: [
    CommonModule,
    FormsModule, // For ngModel, otherweise p-listbox not works
    SharedModule,
    RouterModule.forChild(mediasRoutes)
  ],
  exports: [
  RouterModule
  ]
})
export class MediaModule { }
