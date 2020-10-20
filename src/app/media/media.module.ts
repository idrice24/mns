import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideoListComponent } from './components/video-list/video-list.component';
import { RouterModule, Routes } from '@angular/router';
import { MediaComponent } from './components/media/media.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { MediaDashboardComponent } from './components/media-dashboard/media-dashboard.component';
import { TableModule, Table } from 'primeng/table';
import { ScrollingModule } from '@angular/cdk/scrolling';




const mediasRoutes: Routes = [
  {
    path: '',
    component: MediaComponent,
    children: [
      { path: 'gallery', component: GalleryComponent },
      { path: 'videos', component: VideoListComponent },
      { path: '', component: MediaDashboardComponent }]
  }];


@NgModule({
  declarations: [
    GalleryComponent,
    VideoListComponent,
    MediaComponent,
    MediaDashboardComponent],
  imports: [
    CommonModule,
    TableModule,
    RouterModule.forChild(mediasRoutes)
  ],
  exports: [RouterModule]
})
export class MediaModule { }
