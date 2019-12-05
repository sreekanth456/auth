import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-info-details',
  templateUrl: './info-details.component.html',
  styleUrls: ['./info-details.component.css']
})
export class InfoDetailsComponent implements OnInit {


  public InfoDetails;

  constructor(private router:Router,private activatedRoute:ActivatedRoute) { }

  ngOnInit() {

    this.activatedRoute.paramMap.subscribe((params:ParamMap)=>{

      let id= parseInt(params.get('id'));
      this.InfoDetails=id;
    })
  }

  goPrevious(){

    let PreviousId = this.InfoDetails -1;

    this.router.navigate(['/about/info',PreviousId])

  }

  goNext(){

    let NextId= this.InfoDetails +1;
    this.router.navigate(['/about/info',NextId])

  }

}
