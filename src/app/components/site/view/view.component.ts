import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CatsService } from '../../../api/cats.service';
import { ListCatsI } from 'src/app/models/listcats.interface.ts.module';


@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})

export class ViewComponent implements OnInit {


  lists: ListCatsI[] = []; // call de gatos globales

  constructor( private api:CatsService, private router:Router ) { }

  ngOnInit(): void {
    this.api.catProfile().subscribe(cats =>{
      this.lists = cats;
      console.log(cats)
    });
    
  }

  

}
