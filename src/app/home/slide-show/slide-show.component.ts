import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slide-show',
  templateUrl: './slide-show.component.html',
  styleUrls: ['./slide-show.component.scss']
})
export class SlideShowComponent implements OnInit {
  images = [
    {
      src: '/assets/slider/01.png',
      duration: 2000,
      alt: 'Playin\' with the Playground'
    },
    {
      src: '/assets/slider/02.png',
      duration: 1000,
      alt: 'Playground home screen'
    },
    {
      src: '/assets/slider/03.png',
      duration: 1000,
      alt: 'Playground command bar opened'
    },
    {
      src: '/assets/slider/04.png',
      duration: 500,
      alt: 'Alt key pressed'
    },
    {
      src: '/assets/slider/05.png',
      duration: 1000,
      alt: 'Person bio component default scenario selected'
    },
    {
      src: '/assets/slider/06.png',
      duration: 1000,
      alt: 'Person bio component simple scenario selected'
    },
    {
      src: '/assets/slider/07.png',
      duration: 1000,
      alt: 'Person bio component vertical scenario selected'
    },
    {
      src: '/assets/slider/08.png',
      duration: 1000,
      alt: 'Person bio component gray scenario selected'
    },
    {
      src: '/assets/slider/09.png',
      duration: 1000,
      alt: 'Person bio component orange scenario selected'
    },
    {
      src: '/assets/slider/10.png',
      duration: 1000,
      alt: 'Person bio component red scenario selected'
    },
    {
      src: '/assets/slider/11.png',
      duration: 1000,
      alt: 'Person bio component purple scenario selected'
    },
    {
      src: '/assets/slider/12.png',
      duration: 1000,
      alt: 'Person bio component blue scenario selected'
    },
    {
      src: '/assets/slider/13.png',
      duration: 1000,
      alt: 'Person bio component green scenario selected'
    },
    {
      src: '/assets/slider/14.png',
      duration: 500,
      alt: 'Alt key released'
    },
    {
      src: '/assets/slider/15.png',
      duration: 1000,
      alt: 'Letter B removed from search'
    },
    {
      src: '/assets/slider/16.png',
      duration: 1000,
      alt: 'Cursor removed'
    },
    {
      src: '/assets/slider/17.png',
      duration: 200,
      alt: 'Person bio component blue scenario highlighted'
    },
    {
      src: '/assets/slider/18.png',
      duration: 200,
      alt: 'Person bio component purple scenario highlighted'
    },
    {
      src: '/assets/slider/19.png',
      duration: 200,
      alt: 'Person bio component red scenario highlighted'
    },
    {
      src: '/assets/slider/20.png',
      duration: 200,
      alt: 'Person bio component orange scenario highlighted'
    },
    {
      src: '/assets/slider/21.png',
      duration: 200,
      alt: 'Person bio component gray scenario highlighted'
    },
    {
      src: '/assets/slider/22.png',
      duration: 200,
      alt: 'Person bio component vertical scenario highlighted'
    },
    {
      src: '/assets/slider/23.png',
      duration: 200,
      alt: 'Person bio component simple scenario highlighted'
    },
    {
      src: '/assets/slider/24.png',
      duration: 1000,
      alt: 'Person bio component default scenario highlighted'
    },
    {
      src: '/assets/slider/25.png',
      duration: 1000,
      alt: 'Person bio component sandbox default scenario isolation view'
    },
    {
      src: '/assets/slider/26.png',
      duration: 1000,
      alt: 'Person bio component sandbox code'
    },
    {
      src: '/assets/slider/27.png',
      duration: 2000,
      alt: 'Person bio component sandbox code, default scenario highlighted'
    },
    {
      src: '/assets/slider/28.png',
      duration: 1000,
      alt: 'Person bio component sandbox code hidden'
    },
    {
      src: '/assets/slider/29.png',
      duration: 1000,
      alt: 'Playground command bar opened'
    },
    {
      src: '/assets/slider/30.png',
      duration: 2000,
      alt: 'Person bio component simple scenario highlighted'
    },
    {
      src: '/assets/slider/31.png',
      duration: 1000,
      alt: 'Person bio component sandbox simple scenario isolation view'
    },
    {
      src: '/assets/slider/32.png',
      duration: 1000,
      alt: 'Person bio component sandbox code'
    },
    {
      src: '/assets/slider/33.png',
      duration: 2000,
      alt: 'Person bio component sandbox code, simple scenario highlighted'
    },
    {
      src: '/assets/slider/34.png',
      duration: 500,
      alt: 'Person bio component sandbox code hidden'
    },
    {
      src: '/assets/slider/35.png',
      duration: 1000,
      alt: 'Playground command bar opened'
    },
    {
      src: '/assets/slider/36.png',
      duration: 500,
      alt: 'Person bio component vertical scenario highlighted'
    },
    {
      src: '/assets/slider/37.png',
      duration: 500,
      alt: 'Person bio component gray scenario highlighted'
    },
    {
      src: '/assets/slider/38.png',
      duration: 1000,
      alt: 'Person bio component sandbox gray scenario isolation view'
    },
    {
      src: '/assets/slider/39.png',
      duration: 1000,
      alt: 'Person bio component sandbox code'
    },
    {
      src: '/assets/slider/40.png',
      duration: 2000,
      alt: 'Person bio component sandbox code, gray scenario highlighted'
    },
    {
      src: '/assets/slider/41.png',
      duration: 500,
      alt: 'Person bio component sandbox code'
    },
    {
      src: '/assets/slider/42.png',
      duration: 1000,
      alt: 'Person bio component template code'
    },
    {
      src: '/assets/slider/43.png',
      duration: 200,
      alt: 'Person bio component template code edited'
    },
    {
      src: '/assets/slider/44.png',
      duration: 200,
      alt: 'Person bio component template code edited'
    },
    {
      src: '/assets/slider/45.png',
      duration: 1000,
      alt: 'Person bio component template code bio added'
    },
    {
      src: '/assets/slider/46.png',
      duration: 1000,
      alt: 'Playground reloading after save'
    },
    {
      src: '/assets/slider/47.png',
      duration: 1000,
      alt: 'Person bio component scenario example updated'
    },
    {
      src: '/assets/slider/48.png',
      duration: 2000,
      alt: 'Person bio component scenario example bio highlighted'
    },
    {
      src: '/assets/slider/49.png',
      duration: 500,
      alt: 'Person bio component sandbox code hidden'
    },
    {
      src: '/assets/slider/50.png',
      duration: 500,
      alt: 'Person bio component scenario example bio un-highlighted'
    },
    {
      src: '/assets/slider/51.png',
      duration: 1000,
      alt: 'Playground command bar opened'
    },
    {
      src: '/assets/slider/52.png',
      duration: 500,
      alt: 'Person bio component vertical scenario highlighted'
    },
    {
      src: '/assets/slider/53.png',
      duration: 500,
      alt: 'Person bio component simple scenario highlighted'
    },
    {
      src: '/assets/slider/54.png',
      duration: 500,
      alt: 'Person bio component default scenario highlighted'
    },
    {
      src: '/assets/slider/55.png',
      duration: 1000,
      alt: 'Person bio component sandbox default scenario isolation view'
    },
    {
      src: '/assets/slider/56.png',
      duration: 2000,
      alt: 'Person bio component scenario example bio highlighted'
    },
    {
      src: '/assets/slider/57.png',
      duration: 1000,
      alt: 'Person bio component scenario example bio un-highlighted'
    }
  ];

  increment;
  index = 0;
  image = this.images[0];
  imageCount = this.images.length;

  ngOnInit() {
    this.rotate();
  }

  pause() {
    clearTimeout(this.increment);
  }

  next() {
    if (this.index >= this.imageCount - 1) {
      this.index = 0;
    } else {
      this.index = this.index + 1;
    }
    this.image = this.images[this.index];
  }

  prev() {
    if (this.index > 0) {
      this.index = this.index - 1;
    } else {
      this.index = this.imageCount - 1;
    }
    this.image = this.images[this.index];
  }

  rotate() {
    this.increment = setTimeout(() => {
      if (this.index >= this.imageCount - 1) {
        this.index = 0;
      } else {
        this.index = this.index + 1;
      }
      this.image = this.images[this.index];
      this.rotate();
    }, this.image.duration);
  }
}
