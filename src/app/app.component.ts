import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  username:string;
  response:any;
  details:any;
  d :any;
  
  constructor(private http: HttpClient){ }

  search(){
    this.http.get("https://api.github.com/users/" + this.username)
    .subscribe( (response ) => {
        this.response = response;
    })
  }

  searchOtherDetails(){
    
    let e: any = this.details;
    console.log(e);
    this.d = this.response.e;
  }
  
}
