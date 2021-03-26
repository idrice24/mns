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
  photoDialog: boolean;

  photoPost: boolean; // this is to open the add product form

  photos: Image[];

  photo: Image = {};

  selectedPhotos: Image[];

  submitted: boolean;

  photoForm: FormGroup;


  constructor(
    private photoService: PhotoService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService,
    private titleService: Title
    ) { }

  public now = new Date();

  // convenience getter for easy access to form fields
  get src() { return this.photoForm.get('src'); }
  get summary() { return this.photoForm.get('summary'); }
  get title() { return this.photoForm.get('title'); }

  ngOnInit(): void {
    this.titleService.setTitle('MNS237 - Manage-gallery'); // Adding the title Home to the MNS237  main Title
    this.photoService.getPhotos().subscribe(data => {
      this.photos = data;
      console.log(data[0].title);
  });


    this.photoForm = new FormGroup({
      src: new FormControl('', [Validators.required]), // to check a name of any product in form
      summary: new FormControl('', [Validators.required]), // to check summary field of any product in form
      title: new FormControl('', [Validators.required]),
          });
  }

  openNew() {
    this.photo = {};
    this.submitted = false;
    this.photoPost = true;
    this.messageService.add({ life: 1000 });
  }

  deleteSelectedPhotos() {
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete the selected photos?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.photos = this.photos.filter(val => !this.selectedPhotos.includes(val));
        this.selectedPhotos = null;
        this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Products Deleted', life: 3000 });
      }
    });
  }

  editPhoto(photo: Image) {
    this.photo = { ...photo };
    this.photoDialog = true;
  }

  deletePhoto(photo: Image) {
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete ' + photo.title + '?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.photos = this.photos.filter(val => val.id !== photo.id);
        this.photo = {};
        this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Photo Deleted', life: 3000 });
      }
    });
  }

  hideDialog() {
    this.submitted = false;
    this.photoDialog = false;
  }
  savePhoto() {
    this.submitted = true;

    if (this.photo.title.trim()) {
      if (this.photo.id) {
        this.photos[this.findIndexById(this.photo.id)] = this.photo;
        this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Product Updated', life: 1000 });
      }
      else {
        this.photo.id = 1;
        this.photo.thumbnailImageSrc = 'photo-placeholder.svg';
        this.photos.push(this.photo);
        this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Product Created', life: 1000 });
      }

      this.photos = [...this.photos];
      this.photoDialog = false;
      this.photo = {};
    }
  }

  findIndexById(id: number): number {
    let index = -1;
    for (let i = 0; i < this.photos.length; i++) {
      if (this.photos[i].id === id) {
        index = i;
        break;
      }
    }

    return index;
  }
  // Save to data base this user information
  doSubscription() {

    const currentAppPhoto: Image = {
      title: this.title.value,
      summary: this.summary.value,
      src: 'assets/img/' + this.src.value, // to store the file in the assets folder
      publishedDate: this.now
    };

    this.photoService.addPhoto(currentAppPhoto).subscribe(_ =>
      // To Clean a formular
      this.photoForm.reset());

  }

}
