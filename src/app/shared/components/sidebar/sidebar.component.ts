import { Component } from '@angular/core';
import {GifsService} from "../../../gifs/services/gifs.service";

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  get tags():string[] {
    return this.gifService.tagsHistory;
  }
  deleteTag(tag: string) {
    this.gifService.deleteTag(tag);
  }
  constructor(private gifService: GifsService) {}
  searchTag(tag: string) {
    this.gifService.searchTag(tag);
  }
}
