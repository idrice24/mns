import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../auth/guards/auth.guard';
import { AdminComponent } from './components/admin/admin.component';
import { ManageGalleryComponent } from './components/manage-gallery/manage-gallery.component';
import { ManageBlogComponent } from './components/manage-blog/manage-blog.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { ManageUserComponent } from './components/manage-user/manage-user.component';
import { ManageVideoComponent } from './components/manage-video/manage-video.component';
import { SharedModule } from '../shared/shared.module';
import { ConfirmationService } from 'primeng/api';
import { MessageService } from 'primeng/api';
import { ManageProductComponent } from './components/manage-product/manage-product.component';
import { ManageAbonnementComponent } from './components/manage-abonnement/manage-abonnement.component';


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
          { path: 'dashboard', component: AdminDashboardComponent },
          { path: 'abonnement', component: ManageAbonnementComponent },
          { path: 'blog', component: ManageBlogComponent },
          { path: 'gallery', component: ManageGalleryComponent },
          { path: 'users', component: ManageUserComponent },
          { path: 'products', component: ManageProductComponent },
          { path: 'video', component: ManageVideoComponent },
          { path: '', component: AdminDashboardComponent }
        ]
      }
    ]
  }
];
@NgModule({
  declarations: [
    AdminComponent,
    AdminDashboardComponent,
    ManageGalleryComponent,
    ManageUserComponent,
    ManageBlogComponent,
    ManageVideoComponent,
    ManageProductComponent,
    ManageAbonnementComponent],
  imports: [
    CommonModule,
    SharedModule,

    RouterModule.forChild(adminRoutes)
  ],
  providers: [MessageService, ConfirmationService]

})
export class AdminModule { }
