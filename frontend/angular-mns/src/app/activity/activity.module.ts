import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivityCenterComponent } from './components/activity-center/activity-center.component';



@NgModule({
  declarations: [ActivityCenterComponent],
  imports: [
    CommonModule
  ],
  exports: [ActivityCenterComponent]
})
export class ActivityModule { }
