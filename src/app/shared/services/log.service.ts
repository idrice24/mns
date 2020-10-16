import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LogService {

  constructor() { }

  log(objecToLog: any) {
    const msg = JSON.stringify(objecToLog);
    console.log(msg);
  }
}
