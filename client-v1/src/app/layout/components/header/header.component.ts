import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'cl-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  public username: string = '';
  public password: string = '';
  public users : any = [];
  public userId:string = ''

  constructor(private http: HttpClient) {
    // this.userId = 2

  }
ngOnInit(){
  this.getAllUser()

}

  getAllUser() {
    this.http.get<any>(`http://localhost:5001/api/getAll`).subscribe(
      (data) => {
        // Handle response data
        this.users = data
        console.log('users',data);
      },
      (error) => {
        // Handle error
        console.error(error);
      }
    );
  }
  getUserById(userId:any) {
    let id  = userId._id
    console.log(userId);
    console.log('id=================',id);
    let ids = id

    this.http.get<any>(`http://localhost:5001/api/user/${ids}`).subscribe(
      (data) => {
        // Handle response data
        console.log('skahkjd',data);
        console.log('skahkjd',data._id);
        this.userId = data._id
      },
      (error) => {
        // Handle error
        console.error(error);
      }
    );
  }



updateUser() {
  let userId = this.userId
  const userData = { username: this.username, password: this.password };
  this.http.put<any>(`http://localhost:5001/api/user/${userId}`, userData).subscribe(
    (data) => {

      this.getAllUser()

    },
    (error) => {
      // Handle error
      console.error(error);
    }
  );
}

}
