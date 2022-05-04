import { Component } from '@angular/core';

import { Lightbox } from 'ngx-lightbox';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  _albums: any = [];
  
  constructor(private _lightbox: Lightbox) {
    for (let i = 1; i <= 12; i++) {
      const src = './assets/images/image' + i + '.jpg';
      const caption = 'Image ' + i + ' caption';
      const thumb = './assets/images/thumbs/image' + i + '.jpg';
      const album = {
         src: src,
         caption: caption,
         thumb: thumb
      };

      this._albums.push(album);
    }
  }

  open(index: number): void {
    // open lightbox
    this._lightbox.open(this._albums, index);
  }

  close(): void {
    // close lightbox programmatically
    this._lightbox.close();
  }
  
}
