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
import { ProgressSpinnerModule } from 'primeng/progressspinner';



import { CalendarModule } from 'primeng/calendar';
import { SliderModule } from 'primeng/slider';
import { MultiSelectModule } from 'primeng/multiselect';
import { ContextMenuModule } from 'primeng/contextmenu';
import { DropdownModule } from 'primeng/dropdown';
import { ProgressBarModule } from 'primeng/progressbar';
import { ConfirmationService } from 'primeng/api';
import { MessageService } from 'primeng/api';
import { TableModule } from 'primeng/table';
import { RippleModule } from 'primeng/ripple';
import { ToolbarModule } from 'primeng/toolbar';
import { DialogModule } from 'primeng/dialog';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { InputNumberModule } from 'primeng/inputnumber';
import { RadioButtonModule } from 'primeng/radiobutton';
import { RatingModule } from 'primeng/rating';
import { ToastModule } from 'primeng/toast';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { FileUploadModule } from 'primeng/fileupload';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ManageProductComponent } from './components/manage-product/manage-product.component';
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
    ManageProductComponent],
  imports: [
    CommonModule,
    SharedModule,
    ProgressSpinnerModule,
    TableModule,
    RippleModule,
    DialogModule,
    RadioButtonModule,
    RatingModule,
    ToastModule,
    ButtonModule,
    InputTextModule,
    FileUploadModule,
    TableModule,
    CalendarModule,
    SliderModule,
    DialogModule,
    MultiSelectModule,
    ContextMenuModule,
    DropdownModule,
    ToastModule,
    InputTextModule,
    ProgressBarModule,
    FileUploadModule,
    ToolbarModule,
    RatingModule,
    RadioButtonModule,
    InputNumberModule,
    ConfirmDialogModule,
    InputTextareaModule,
    RouterModule.forChild(adminRoutes)
  ],
  providers: [MessageService, ConfirmationService]

})
export class AdminModule { }
