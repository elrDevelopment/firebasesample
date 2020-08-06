import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AppComponent} from './app.component';
import {CacheExampleComponent} from './cache-example/cache-example.component';
import {HomeComponent} from './home/home.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'cache-examples',
    component: CacheExampleComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
