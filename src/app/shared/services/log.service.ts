import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LogService {

  constructor() { }

  /**
   * Stringify and Log the given information to  web console.
   * @param  params  Message to log.
   */
  log(params: any) {
    const msgStringify = JSON.stringify(params);
    console.log(msgStringify);
  }


}
