# Table of Contents
1. [Step by Step for users](#step-by-step-for-users)
1. [Step by Step for contact-form](#step-by-step-for-contact-form)
1. [Delete a local branch in Git](#delete-a-local-branch-in-git)
1. [NullInjectorError by E2E Test](#nullInjectorError-by-e2e-test)
1. [Commits behind master](#commits-behind-master)
1. [PrimeNG Components That we use](#primeng-components-that-we-use)
1. [Use of Firebase for WebApp](#use-of-firebase-for-WebApp) @idrice helps
1. [Token Based Authentication](#token-based-authentication)
 

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
