import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AvatarService {
  private colors = [
    '#c62828',
    '#ad1457',
    '#6a1b9a',
    '#4527a0',
    '#283593',
    '#1565c0',
    '#0277bd',
    '#00838f',
    '#2e7d32',
    '#558b2f',
    '#9e9d24',
    '#f9a825',
    '#ff8f00',
    '#ef6c00',
    '#d84315'
  ];
  private avatarsUrl = 'https://dummyimage.com/60x60';  // URL to web dummy immage api
  generateAvatar(firstName: string, lastName: string): string {
    const indexColor = Math.round(Math.random() * (this.colors.length - 1));
    const url = `${this.avatarsUrl}/${this.colors[indexColor].substr(1)}`;
    const resp = url + '/ffffff&text=' + firstName[0] + lastName[0];
    return (resp);
  }

  constructor() { }
}
