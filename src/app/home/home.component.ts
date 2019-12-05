import { Component, OnInit } from '@angular/core';
import { UserInfoService } from '../service/user-info.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  showdata=false;

  public users;


  constructor(private userInfo:UserInfoService) { }

  ngOnInit() {

    this.userInfo.getData().subscribe((data)=>{

      this.users=data;
    })
  }

}
