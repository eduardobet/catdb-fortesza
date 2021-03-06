import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/site/home/home.component';
import { CategoriesComponent } from './components/site/categories/categories.component';
import { ViewComponent } from './components/site/view/view.component';

const routes: Routes = [
  { path: '', redirectTo:'home', pathMatch:'full'},
  { path: 'home', component: HomeComponent},
  { path: 'categories', component: CategoriesComponent},
  { path: 'view', component: ViewComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
