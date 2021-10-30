import { Component, OnInit } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { AppSubscriber } from 'src/app/shared/models/app-subscriber';
import { AppSubscriberService } from 'src/app/shared/services/app-subscriber.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-manage-abonnement',
  templateUrl: './manage-abonnement.component.html',
  styleUrls: ['./manage-abonnement.component.scss'],
  providers: [MessageService, ConfirmationService]
})
export class ManageAbonnementComponent implements OnInit {
  appSubscriberList: AppSubscriber[];

  // To Store selected elements from HTML-table
  selectedAppSubscriberList: AppSubscriber[];

  // Current  selected subscriber
  appSubscriber: AppSubscriber;

  numberOfRowPerPage: number;


  constructor(
    private messageService: MessageService,
    private confirmationService: ConfirmationService,
    private appSubscriberService: AppSubscriberService,
    private titleService: Title // Inject to set document title on  browser
    ) {
    this.numberOfRowPerPage = 10;
  }


  ngOnInit(): void {
    this.appSubscriberService.getAppSubscriber().subscribe(i => this.appSubscriberList = i);
    this.titleService.setTitle('MNS237 - Manage-abonnement'); // Adding the title Home to the MNS237  main Title
  }

  deleteSelectedAppSubscriberList() {
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete the selected products?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.appSubscriberList = this.appSubscriberList.filter(val => !this.selectedAppSubscriberList.includes(val));
        this.selectedAppSubscriberList = null;
        this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Products Deleted', life: 3000 });
      }
    });
  }

  deleteAppSubscriber(appSubscriber: AppSubscriber) {
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete ' + appSubscriber.lName + '?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.appSubscriberList = this.appSubscriberList.filter(val => val.id !== appSubscriber.id);
        this.appSubscriber = null;
        this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Unsubscription Done', life: 3000 });
      }
    });
  }

}
