import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

iWillTakeClass = true;

myPromiseIsToTakeClass = new Promise((resolve, reject) =>{
  
  //making an http call
  //which will take 2 seconds
  
  
  setTimeout( () => {
    if(this.iWillTakeClass) {
      resolve("I am taking Class");
    } else {
      reject("Sorry no class");
    }
  }, 5000);
  
});
 
  specialDays = [
    {name: 'valentines day', date : new Date(2018, 1, 14)},

    {name: 'independence day', date : new Date(2018, 7, 15)},
    
    {name: 'republic day', date: new Date(2018, 0, 26)}
    ];
}
