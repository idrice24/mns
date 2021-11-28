// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  // Your web app's Firebase configuration
  firebaseConfig: {
    apiKey: 'AIzaSyBctp--0xgHdgEKst0ilnKkQEkZn2bEHZA',
    authDomain: 'mns237.firebaseapp.com',
    databaseURL: 'https://mns237.firebaseio.com',
    projectId: 'mns237',
    storageBucket: 'mns237.appspot.com',
    messagingSenderId: '556524170910',
    appId: '1:556524170910:web:ee975ca7d5cb115f91958f'
  },
  // Your heroku -Cloud Application Platform configuration
  herokuConfig: {
    blogURL: 'api/blog'
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
