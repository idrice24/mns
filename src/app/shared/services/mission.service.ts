import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { AppUser } from '../models/app-user';


// https://angular.io/guide/component-interaction#parent-and-children-communicate-via-a-service

// To implement Component interaction in Angular see link
@Injectable({
  providedIn: 'root'
})
export class MissionService {

  // Observable boolean sources
  private missionAddedToChartSource = new Subject<boolean>();
  private missionAnnouncedSource = new Subject<string>();
  private missionConfirmedSource = new Subject<string>();


  // Observable boolean streams
  missionAddedToChart$: Observable<boolean> = this.missionAddedToChartSource.asObservable();
  missionAnnounced$: Observable<string> = this.missionAnnouncedSource.asObservable();
  missionConfirmed$: Observable<string> = this.missionConfirmedSource.asObservable();

  constructor() { }

  confirmLogging(name: string) {
    // Notify subscriber
    this.missionConfirmedSource.next(name);
  }

  addingOrRemoving(indication: boolean) {
    this.missionAddedToChartSource.next(indication);
  }
}
