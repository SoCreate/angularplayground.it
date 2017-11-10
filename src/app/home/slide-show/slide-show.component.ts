import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slide-show',
  templateUrl: './slide-show.component.html',
  styleUrls: ['./slide-show.component.scss']
})
export class SlideShowComponent {
  images = [
    {
      src: '/assets/slider/01.png',
      duration: '3500',
      alt: ''
    },
    {
      src: '/assets/slider/02.png',
      duration: '1000',
      alt: ''
    },
    {
      src: '/assets/slider/03.png',
      duration: '1000',
      alt: ''
    },
    {
      src: '/assets/slider/04.png',
      duration: '2000',
      alt: ''
    },
    {
      src: '/assets/slider/05.png',
      duration: '2000',
      alt: ''
    },
    {
      src: '/assets/slider/06.png',
      duration: '1000',
      alt: ''
    },
    {
      src: '/assets/slider/07.png',
      duration: '1000',
      alt: ''
    },
    {
      src: '/assets/slider/08.png',
      duration: '2000',
      alt: ''
    },
    {
      src: '/assets/slider/09.png',
      duration: '1000',
      alt: ''
    },
    {
      src: '/assets/slider/10.png',
      duration: '1000',
      alt: ''
    },
    {
      src: '/assets/slider/11.png',
      duration: '2000',
      alt: ''
    },
    {
      src: '/assets/slider/12.png',
      duration: '1000',
      alt: ''
    },
    {
      src: '/assets/slider/13.png',
      duration: '1000',
      alt: ''
    },
    {
      src: '/assets/slider/14.png',
      duration: '2000',
      alt: ''
    },
    {
      src: '/assets/slider/15.png',
      duration: '500',
      alt: ''
    },
    {
      src: '/assets/slider/16.png',
      duration: '1000',
      alt: ''
    },
    {
      src: '/assets/slider/17.png',
      duration: '500',
      alt: ''
    },
    {
      src: '/assets/slider/18.png',
      duration: '500',
      alt: ''
    },
    {
      src: '/assets/slider/19.png',
      duration: '1000',
      alt: ''
    },
    {
      src: '/assets/slider/20.png',
      duration: '1000',
      alt: ''
    },
    {
      src: '/assets/slider/21.png',
      duration: '2000',
      alt: ''
    },
    {
      src: '/assets/slider/22.png',
      duration: '500',
      alt: ''
    },
    {
      src: '/assets/slider/23.png',
      duration: '1000',
      alt: ''
    },
    {
      src: '/assets/slider/24.png',
      duration: '200',
      alt: ''
    },
    {
      src: '/assets/slider/25.png',
      duration: '200',
      alt: ''
    },
    {
      src: '/assets/slider/26.png',
      duration: '1000',
      alt: ''
    },
    {
      src: '/assets/slider/27.png',
      duration: '1000',
      alt: ''
    },
    {
      src: '/assets/slider/28.png',
      duration: '1000',
      alt: ''
    },
    {
      src: '/assets/slider/29.png',
      duration: '2000',
      alt: ''
    },
    {
      src: '/assets/slider/30.png',
      duration: '500',
      alt: ''
    },
    {
      src: '/assets/slider/31.png',
      duration: '500',
      alt: ''
    },
    {
      src: '/assets/slider/32.png',
      duration: '1000',
      alt: ''
    },
    {
      src: '/assets/slider/33.png',
      duration: '500',
      alt: ''
    },
    {
      src: '/assets/slider/34.png',
      duration: '500',
      alt: ''
    },
    {
      src: '/assets/slider/35.png',
      duration: '500',
      alt: ''
    },
    {
      src: '/assets/slider/36.png',
      duration: '1000',
      alt: ''
    },
    {
      src: '/assets/slider/37.png',
      duration: '2000',
      alt: ''
    },
    {
      src: '/assets/slider/38.png',
      duration: '1000',
      alt: ''
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

  private rotate() {
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
