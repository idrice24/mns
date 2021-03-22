import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Image } from 'src/app/shared/models/image';
import { PhotoService } from 'src/app/shared/services/photo.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-manage-gallery',
  templateUrl: './manage-gallery.component.html',
  styleUrls: ['./manage-gallery.component.scss'],
  providers: [MessageService, ConfirmationService]
})
export class ManageGalleryComponent implements OnInit {
pictureDialog: boolean;
picturePost: boolean;
pictures: Image[];
picture: Image = {};
selectedPictures: Image[];
submitted: boolean;
pictureForm: FormGroup;
now: Date = new Date();

constructor(
  private photoService: PhotoService,
  private messageService: MessageService,
  private confirmationService: ConfirmationService,
  private titleService: Title // Inject to set document title on  browser
) { }

  // convenience getter for easy access to form fields
  get code() { return this.pictureForm.get('code'); }
  get summary() { return this.pictureForm.get('summary'); }
  get src() { return this.pictureForm.get('assets/img/' + 'content'); }
  get inventoryStatus() { return this.pictureForm.get('inventoryStatus'); }
  get title() { return this.pictureForm.get('title'); }

  ngOnInit(): void {

  this.photoService.getPhotos().subscribe(data => {
          this.pictures = data;
          console.log(data[0].title);
        });

  this.titleService.setTitle('MNS237 - Manage-gallery'); this.pictureForm = new FormGroup({
      title: new FormControl('', [Validators.required]), // to check a name of any picture in form
      summary: new FormControl('', [Validators.required]), // to check summary field of any picture in form
      src: new FormControl('', [Validators.required]),
      inventoryStatus: new FormControl('', [Validators.required]),
  });
}

openNew() {
    this.picture = {};
    this.submitted = false;
    this.picturePost = true;
    this.messageService.add({ life: 1000 });
  }

  deleteSelectedPictures() {
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete the selected pictures?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.pictures = this.pictures.filter(val => !this.selectedPictures.includes(val));
        this.selectedPictures = null;
        this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Images Deleted', life: 3000 });
      }
    });
  }

  editPicture(picture: Image) {
    this.picture = { ...picture };
    this.pictureDialog = true;
  }

  deletePicture(picture: Image) {
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete ' + picture.src + '?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.pictures = this.pictures.filter(val => val.id !== picture.id);
        this.picture = {};
        this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Image Deleted', life: 3000 });
      }
    });
  }

  hideDialog() {
    this.submitted = false;
    this.pictureDialog = false;
  }

  savePicture() {
    this.submitted = true;

    if (this.picture.src.trim()) {
      if (this.picture.id) {
        this.pictures[this.findIndexById(this.picture.id)] = this.picture;
        this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Image Updated', life: 1000 });
      }
      else {
        this.picture.id = 1;
        this.picture.src = 'picture-placeholder.svg';
        this.pictures.push(this.picture);
        this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Image Created', life: 1000 });
      }

      this.pictures = [...this.pictures];
      this.pictureDialog = false;
      this.picture = {};
    }
  }

  findIndexById(id: number): number {
    let index = -1;
    for (let i = 0; i < this.pictures.length; i++) {
      if (this.pictures[i].id === id) {
        index = i;
        break;
      }
    }

    return index;
  }
  // Save to data base this user information
  doSubscription() {

    const currentAppImage: Image = {
      title: this.title.value,
      publishedDate: this.now,
      src: this.src.value,
      summary: this.summary.value,
    };

    this.photoService.addPicture(currentAppImage).subscribe(_ =>
      // To Clean a formulary
      this.pictureForm.reset());

  }

}
