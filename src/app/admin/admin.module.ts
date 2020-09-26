import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../auth/guards/auth.guard';
import { AdminComponent } from './components/admin/admin.component';
import { ManageGalleryComponent } from './components/manage-gallery/manage-gallery.component';
import { ManageBlogComponent } from './components/manage-blog/manage-blog.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';

// REF: https://angular.io/guide/router  live example
const adminRoutes: Routes = [
  {
    path: '',
    component: AdminComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        canActivateChild: [AuthGuard],
        children: [
          { path: 'blog', component: ManageBlogComponent },
          { path: 'gallery', component: ManageGalleryComponent },
          { path: '', component: AdminDashboardComponent }
        ]
      }
    ]
  }
];
@NgModule({
  declarations: [AdminComponent],
  imports: [
    CommonModule,
    RouterModule,
    RouterModule.forChild(adminRoutes)
  ]

})
export class AdminModule { }
