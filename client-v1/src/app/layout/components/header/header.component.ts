import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'cl-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  public userId: any = '662fdf444f5c293bd09d5aa0'
  public username: string = '';
  public password: string = '';
  public users : any = [];

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
    console.log(id);
    this.http.get<any>(`http://localhost:5001/api/users/${id}`).subscribe(
      (data) => {
        // Handle response data
        console.log('skahkjd',data);
        console.log('skahkjd',data._id);
      },
      (error) => {
        // Handle error
        console.error(error);
      }
    );
  }



updateUser() {
  const userData = { username: this.username, password: this.password };
  this.http.put<any>(`http://localhost:5001/users/${this.userId}`, userData).subscribe(
    (data) => {
      // Handle response data
      console.log(data);
    },
    (error) => {
      // Handle error
      console.error(error);
    }
  );
}

}
