import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedModule} from "../shared/shared.module";


import { SearchBoxComponent } from './components/search-box/search-box.component';
import {HomePageComponent} from "./pages/home/home-page.component";
import { CardListComponent } from './components/card-list/card-list.component';
import { CardComponent } from './components/card/card.component';
import {GifsService} from "./services/gifs.service";




@NgModule({
  declarations: [
    SearchBoxComponent,
    HomePageComponent,
    CardListComponent,
    CardComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    HomePageComponent
  ],
  providers: [
    GifsService
  ],
})
export class GifsModule { }
