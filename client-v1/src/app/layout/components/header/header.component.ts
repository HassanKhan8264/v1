import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { EndpointService } from '../../../core/http/endpoint.service';
import { take } from 'rxjs';

@Component({
  selector: 'cl-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  public userId: any = '662fdf444f5c293bd09d5aa0'
  public username: string = '';
  public password: string = '';
  public users: any = [];

  constructor(private EndpointService: EndpointService) {
    // this.userId = 2

  }
  ngOnInit() {
    this.getAllUser()

  }

  getAllUser() {
    this.EndpointService.getAll().pipe(take(1)).subscribe(data => {
      {
        console.log(data);
      }
    })

  }
  getUserById(userId: any) {

  }



  updateUser() {

  }

}
