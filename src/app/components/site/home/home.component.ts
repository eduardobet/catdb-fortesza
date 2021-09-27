import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CatsService } from '../../../api/cats.service';
import { ListCatsI, ListCategoriesI, ListCategoriesImgI  } from 'src/app/models/listcats.interface.ts.module';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  lists: ListCatsI[] = []; // call de gatos globales
  categories: ListCategoriesI[] = []; //call de categorias
  categoriesImg: ListCategoriesImgI[] = []; // call de imagenes dentro de categorias
  p:  number = 1;
  q: number = 20;
  currentPage: number = 1;
  searchInput: any;
  searchInput2: any;

  constructor( private api:CatsService, private router:Router ) { }

  ngOnInit(): void {
    this.api.catList().subscribe(cats =>{
      this.lists = cats;
      // console.log(cats)
    });
  }
    public get filterParams(){
      return{
        name: this.searchInput || '',
        origin: this.searchInput2 || '',
      }
    }
    
    filter(){
      this.lists.filter( cat => cat.name.toLowerCase().includes(this.searchInput.toLowerCase()) || cat.origin.toLowerCase().includes(this.searchInput.toLowerCase()) )
    }

    onPageChange(page: number) {
      this.currentPage = page;
        window.scrollTo(0, 0);
    }

}