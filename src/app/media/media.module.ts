import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideoListComponent } from './components/video-list/video-list.component';
import { RouterModule, Routes } from '@angular/router';
import { MediaComponent } from './components/media/media.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { MediaDashboardComponent } from './components/media-dashboard/media-dashboard.component';
import { TableModule, Table } from 'primeng/table';
import { SharedModule } from '../shared/shared.module';
import { FileUploadModule } from 'primeng/fileupload';
import { ListboxModule } from 'primeng/listbox';
import { GalleriaModule } from 'primeng/galleria';
import { CardModule } from 'primeng/card';
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
    ListboxModule,
    TableModule,
    SharedModule,
    GalleriaModule,
    CardModule,
    FileUploadModule,
    RouterModule.forChild(mediasRoutes)
  ],
  exports: [RouterModule]
})
export class MediaModule { }
