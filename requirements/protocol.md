# Table of Contents
1. [Step by Step for users](#step-by-step-for-users)
1. [Step by Step for contact-form](#step-by-step-for-contact-form)
1. [Delete a local branch in Git](#delete-a-local-branch-in-git)
1. [NullInjectorError by E2E Test](#nullInjectorError-by-e2e-test)
1. [Commits behind master](#commits-behind-master)
1. [PrimeNG Components That we use](#primeng-components-that-we-use)
1. [Use of Firebase for WebApp](#use-of-firebase-for-WebApp) @idrice helps
1. [Token Based Authentication](#token-based-authentication)
1. [Generate 1000 mock gigga data](#generate-mock-data)
1. [Firebase nice commands](#firebase-nice-commands)
 

# Here are protocols of components, functions/method, technologies 

## Step by Step for users
 1. Download the primeNg liberies using the commands 
 1. Import all the module you are going to use in the  admin module file of your project
 ```ts
    
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
```
 1. Create a model file **model/appUser.ts**
 ```ts
ng g class apssUser
```
 1. Create 4 files the .html (Makeup file), .scss ( the style file), .spec.ts (the method file), and .ts ( component file) files using the command 'ng generate component manage-user' in the respective directory .
 ```ts
ng g component manger-user
```
 1. Rename the css file to scss -- **scss file**
 1. Export the component file
 1. Implement the function/method to run clients instructions
 1. Design a UI with primeng and Bootstrap -- **HTML file**
 1. create a service file -- **user-service**
 ```ts
ng g service user-service
```
 1. create a data service user file -- **in-memory-data-service**.
 1. run your code if any error correct it run back.



# Step by Step for contact-form
1. Import desired modules -  **Module file**
```ts
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button'; 
import { RippleModule } from 'primeng/ripple'; // pRipple would not works
import { InputTextareaModule } from 'primeng/inputtextarea';
```
1. Create model -- **Model file**
```ts
ng g class contact // if needed
```
1. Create component  -- html, ts, scss
1. Rename css to scss // If needed
1. Export component file
1. Implement  desired logic i.e validation, sending
1. Design HTML with primeng and Bootstrap -- **HTML file**

|PrimeNG Css-class |Description|
|--|---|
|p-grid|to represents a grid witd div tag|
|p-ai-stretch|@Idrice need helps|
|p-inputgroup|@Idrice need helps|
|pInputText|Extended input as primeng input important!|
|pButton|Extended button as primeng button important!|
|pRipple|Extended input as primeng input important!|
|required| To valide input element using angular|
|[disabled]|Binding using angular|
|label="Envoyer"|Content of button |
|formControlName="mgs"|To use for Validation |
 
# Delete a local branch in Git
```js
git branch -l // List local branch 
git branch -D  nameOfLocalBranch //
```
 
# NullInjectorError by E2E Test
Just **import HttpClientTestingModule** in desired spec.ts file

# Commits behind master
1. Risk, overwrite something in master
1. Risk on conflict
1. Best way number should be Zero--> Sync with master before to make a change

# Sidebar
|PrimeNG Component |Description|
|--|---|
|Sidebar|to represents a grid witd div tag|
|Sidebar|to represents a grid witd div tag|

# Use of Firebase for WebApp
1. Sync data using Cloud Firestore and Cloud Storage for Firebase.
1. Authenticate your users using Firebase Authentication.
1. Deploy your web app on Firebase Hosting.
1. Send notifications with Firebase Cloud Messaging.
1. Collect your web app's performance data.

# Token Based Authentication
1. We use it in Auth, Admin, Authservice, Loggin Component
1. Open your browser with the app
1. Go to **Application Tab**  when you want to spy your app with browser
1. On the left see **Local Storage** whih provide a table with your key

# Generate Mock Data
1. To facility my test data
1. Can generate gigga data from any data type
1. Go to website https://mockaroo.com/
1. Select you POCO data
1. Save it json or whatever you want.

# Firebase nice commands
|Commands |Description|
|--|---|
|npm install -g firebase-tools|install glabally **firebase-tools**|
|firebase login|Login to your firebase like in browser|
|firebase projects:list|Check if loggin succes by list all projects|
|firebase init| List next feature of firease ie. hosting |
|firebase deploy| Push your static html into firebase cloud |

# HOSTING YOUR UI
To host your web project on firebase do the following steps
 1. Create an account on Firebase
 1. Sign-in and create a firebase project
 1. Register your app with firebase
 1. Add firebase SDK
 to add only a specific firebase product, add the following code to your main html file
 ```ts
 <!-- The core Firebase JS SDK is always required and must be listed first -->
<script src="/__/firebase/8.0.2/firebase-app.js"></script>

<!-- TODO: Add SDKs for Firebase products that you want to use
     https://firebase.google.com/docs/web/setup#available-libraries -->
<script src="/__/firebase/8.0.2/firebase-analytics.js"></script>

<!-- Initialize Firebase -->
<script src="/__/firebase/init.js"></script>
```
1. Install CLI firebase using
```ts
$ npm install -g firebase tools
```
1. Deploy your firebase hosting using the following command
```ts
$ firebase login ( to login to fb account if not yet )
$ firebase init (to run your project )
```
1. modify your firebase.json file, add 
```ts
"site": "mns237test-org", ( the site name of your web site )
```
1. run the deploy command 
```ts
firebase deploy --only hosting:mns237test-org
```

# CREATING A FORM
## Form Controls (Using Reactive Forms)
1. we import the NgModule and ReactiveFormsModule
```ts 
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
```
1. Create a component file
import the formControle file
````ts 
import { formControl } from '@angular/form';
````
create alll the function/method to be use.
1. Create an html file ( UI )
	-Using a form control binding instead of ngModel
	-Access the current value in the form field

## Form Groups
	here we dot he first and second steps of as that of form control then you do the following
1. import the FormModule in the main app module
````ts
import { FormModule } from '@angular/form';
````
1. create a commponent file and import the following files
````ts
import { FormGroup, FormControl, Validators } from '@angular/forms';
````
then create all the method and function to be use...#
1. create your UI ( html file )

## Form Builders
here you jsu have to repeat the above steps and modify the follolwing files
-- the component file by importing the formBuilder

## Form Data
Here it is to manage the Control State, Validity and Error Messages
 Here we just modify the HTML file by doing the following
 -- Accesss an individual control element's validity through the form group
 -- Check for indivitual validator status for a form element

## Form and Data Model
1. here just have to modify your UI so that it will do the following
-- Reset the form  to its original state
-- Simulate loading a stock from the server
1. Modify the component file so as to create the method and function to be use by the 1 and 2 steps of the UI file.

## FormArrays //i will use this to create a comment part of the a post in a blog.
the steps are:
1. Add a new model to represent one or many comment under a blog or post
1. Add a button in the UI to add a new comment for a blog or post
1. Add a button to remove an added comment from blogManage
1. Support basic validation on each comment added. 