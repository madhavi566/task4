import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IndexComponent } from './index/index.component';
import { SinglepropertyComponent } from './aboutus/singleproperty/singleproperty.component';
import { SearchresultComponent } from './aboutus/searchresult/searchresult.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { NewsComponent } from './news/news.component';


const routes: Routes = [
  {path:'',component:IndexComponent},
  {path:'aboutus',component:AboutusComponent},
  {path:'contactus',component:ContactusComponent},
  {path:'news',component:NewsComponent},
  
];

@NgModule({

  declarations: [
    IndexComponent,
    SinglepropertyComponent,
    SearchresultComponent,
    AboutusComponent,
    ContactusComponent,
    NewsComponent,

  ],

    imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
