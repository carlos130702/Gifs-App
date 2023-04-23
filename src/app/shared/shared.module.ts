import {NgModule} from "@angular/core";
import {SidebarComponent} from "./components/sidebar/sidebar.component";
import {NgForOf, NgIf, NgStyle, TitleCasePipe} from "@angular/common";
import { LazyImageComponent } from './components/lazy-image/lazy-image.component';

@NgModule({
  declarations: [
    SidebarComponent,
    LazyImageComponent
  ],
  imports: [
    NgForOf,
    TitleCasePipe,
    NgIf,
    NgStyle
  ],
  exports: [
    SidebarComponent,
    LazyImageComponent
  ]
})
export class SharedModule {
}
