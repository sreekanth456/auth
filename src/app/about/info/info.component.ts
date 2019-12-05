import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {

  constructor(private rouuter:Router) { }

  ngOnInit() {
  }

  userInfo=[

    {id:1,name:"raja",age:26,gender:"male"},
    {id:2,name:"sreekanth",age:24,gender:"male"},
    {id:3,name:"arthi",age:21,gender:"fe-male"},
    {id:4,name:"roja",age:22,gender:"fe-male"},

  ]

  onSelect(data){

    this.rouuter.navigate(['about/info',data.id])
  }

}
