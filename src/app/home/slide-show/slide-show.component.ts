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
      duration: '5000',
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
      duration: '500',
      alt: ''
    },
    {
      src: '/assets/slider/06.png',
      duration: '1000',
      alt: ''
    },
    {
      src: '/assets/slider/07.png',
      duration: '2000',
      alt: ''
    },
    {
      src: '/assets/slider/08.png',
      duration: '500',
      alt: ''
    },
    {
      src: '/assets/slider/09.png',
      duration: '1000',
      alt: ''
    },
    {
      src: '/assets/slider/10.png',
      duration: '500',
      alt: ''
    },
    {
      src: '/assets/slider/11.png',
      duration: '4000',
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

  imagesLoaded = [];
  image;
  index = -1;
  increment;
  isIncrementing = false;

  ngOnInit() {
    this.preload(this.images, this.imagesLoaded, this.rotate());
    this.isIncrementing = true;
  }

  preload(images, imagesLoaded, callback) {
    let img;
    let remainingImgs = images.length;
    for (let i = 0; i < images.length; i++) {
        img = new Image();
        img.onload = function() {
            --remainingImgs;
            if (remainingImgs <= 0) {
                callback();
            }
        };
        img.src = images[i];
        imagesLoaded.push(img);
    }
  }

  rotate() {
    this.index = this.index + 1;
    if (this.index >= this.images.length ) {
      this.index = 0;
    } else if (this.index < 0) {
      this.index = this.images.length - 1;
    }
    this.image = this.images[this.index];
    this.increment = setTimeout(() => {
      this.rotate();
    }, this.image.duration);
  }

  resume() {
    if (!this.isIncrementing) {
      this.isIncrementing = true;
      this.increment = setTimeout(() => {
        this.rotate();
      }, this.image.duration);
    }
  }

  pause() {
    clearTimeout(this.increment);
    this.isIncrementing = false;
  }

  next() {
    this.pause();
    if (this.index > this.images.length - 2) {
      this.index = 0;
    } else {
      this.index = this.index + 1;
    }
    this.image = this.images[this.index];
  }

  prev() {
    this.pause();
    if (this.index > 0) {
      this.index = this.index - 1;
    } else {
      this.index = this.images.length - 1;
    }
    this.image = this.images[this.index];
  }

}
